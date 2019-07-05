#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import hashlib
import xml.etree.ElementTree as ET
import abkAW
import roman


# 2017/2018 BTL CTS Project, Prof. Charlotte Schubert, Alte Geschichte Leipzig
# Function: turn XML dump of BTL into CTS repository structure
# usage: 
# 1. configure this script - see Sction CONFIGURATION OF THE SCRIPT
# 2. run python 2BTLtoCTS.py 
# Dokumentation BTL XML:  http://dtd.nlm.nih.gov/book/tag-library/3.0/index.html?elem=body
#   
# GPLv3 copyrigth
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.


##-----------------CONFIGURATION OF THE SCRIPT
dumpthewordcountsofeachexml = "Autor;Werk;BTL TLL Info;Wörteranzahl\n"##stistics dump
dumpnotinruecker = " " ##debug dump
hsctaFolder = "/h" #filesystem target
NSSS = "BTL" #namespace of the repository
filenames = ["BTL_OUT_2011-02.xml","BTL_OUT_2011-03.xml","BTL_OUT_2011-04.xml","BTL_OUT_2011-05.xml","BTL_OUT_2011-06.xml","BTL_OUT_2011-07_modified_20140212.xml","BTL_OUT_2011-08.xml","BTL_OUT_2011-09.xml","BTL_OUT_2011-10.xml","BTL_OUT_2011-11.xml","BTL_OUT_2011-12.xml","BTL_OUT_2011-13.xml","BTL_OUT_2011-14.xml","BTL_OUT_2011-15.xml","BTL_OUT_2011-16_modified_20140212.xml","BTL_OUT_2011-17.xml","BTL_OUT_2011-18.xml","BTL_OUT_2011-19.xml","BTL_OUT_2011-20.xml","BTL_OUT_2011-21.xml","BTL_OUT_2011-22.xml","BTL_OUT_2011-23.xml","BTL_OUT_2011-24.xml","BTL_OUT_2011-25.xml","BTL_OUT_2011-26.xml","BTL_OUT_2011-27.xml","BTL_OUT_2011-28.xml","BTL_OUT_2011-29.xml","BTL_OUT_2011-30.xml","BTL_OUT_2011-31.xml","BTL_OUT_2011-32.xml","BTL_OUT_2011-33.xml","BTL_OUT_2011-34.xml","BTL_OUT_2011-35.xml","BTL_OUT_2011-36.xml","Agricola_00001.xml","Asterius_00001.xml","Lactantius_Fasc3.xml","Lactantius_Fasc4.xml","Curtius_00001.xml","Vergil_00001.xml"]
#BTL dump input files 

##-----------------MINOR STRING OPERATIONS
def IISSUPPER( astr ):
    return astr.isupper()

def getupperletters( astr ):
    return filter(IISSUPPER, astr)

def distinctinstrlist( astr ):
    awlist = astr.split(" ")
    return " ".join(set( awlist ))

##-----------------KNOWLEDEBASE
def mergeAKlists():
    print("start merging");#merge greek & latin list and not old and new
    for Aabk in abkAW.abkAWOLD04032017:
        try:
            abkAW.abkAW[Aabk]
        except:
            abkAW.abkAW[Aabk] = abkAW.abkAWOLD04032017[Aabk];

    
    for Aabk in abkAW.abkAWocd:
        try:
            abkAW.abkAW[Aabk]
        except:
            abkAW.abkAW[Aabk] = abkAW.abkAWocd[Aabk];
    print("merged")

##-----------------DATA EXTRACTION FROM XML
def divBookpart( abookpart ):
    b = abookpart.split('</book-part-meta>')
    return b[0], b[1]
def extractAUTHOR( abookpatmeta ):
    if('</string-name>' in Bookpartmeta):
        return Bookpartmeta.split('</string-name>')[0].split('<string-name>')[1]
    else:
        return False
def extractTITLE( abookpatmeta ):
    if('</title>' in Bookpartmeta):
        return Bookpartmeta.split('</title>')[0].split('<title>')[1]
    else:
        return False
def extractTLL( abookpatmeta ):
    if('<kwd-group kwd-group-type="tll_code">' in abookpatmeta and "</kwd>" in abookpatmeta ):
        try:
            return abookpatmeta.split( '<kwd-group kwd-group-type="tll_code">' )[1].split('</kwd>')[0].split("<kwd>")[1]
        except:
            return False
    else:
        return False

##------------------STRING LEVEL DATA EXTRACTION
def extractTLLINFOS( tllstr ):
    #some cases are replaced dirctly
    cleanedtllstr = distinctinstrlist( tllstr.replace(".", "").replace("(", "").replace(")", "").replace("CAT0", "CATO").replace("MESSALA", "MESSALLA").replace("SANTRA.", "SANTRA").replace("VARRO.", "VARRO") )
    cw = cleanedtllstr.split(" ")
    howmuchwordsisauthor = 0
    for c in range( len(cw) ):
        u = getupperletters( cw[c] )
        if(len(cw[c]) == len(u)):
            howmuchwordsisauthor+=1

    notcleaned = tllstr.split(" ")
 
    extllauthor = " ".join( notcleaned[0:howmuchwordsisauthor] )    
    tllauthor = False
    tllauthorcontent = False
    posibAut = [extllauthor.upper(), 
                extllauthor.upper()+".", 
                extllauthor.upper().replace(".",""), 
                extllauthor.upper().replace("U", "V"), 
                extllauthor.upper()+".".replace("U", "V"), 
                extllauthor.upper().replace(".","").replace("U", "V") ]
    switch = False
    if( howmuchwordsisauthor > 1 ):
        print("makmak", notcleaned);
        switch = True
        posibAut.append( notcleaned[0].upper() ) 
        posibAut.append( notcleaned[0].upper()+"." ) 
        posibAut.append( notcleaned[0].upper().replace(".","") ) 
        posibAut.append( notcleaned[0].upper().replace("U", "V") ) 
        posibAut.append( notcleaned[0].upper()+".".replace("U", "V") )
        posibAut.append( notcleaned[0].upper().replace(".","").replace("U", "V") ) 
        for aufix in range(1,howmuchwordsisauthor):
            for aufixlast in range(1, 16): #that many vorläuferworte
                posibAut.append( posibAut[-aufixlast]+" "+notcleaned[aufix].upper() ) 
                posibAut.append( posibAut[-aufixlast]+" "+notcleaned[aufix].upper()+".") 
                posibAut.append( posibAut[-aufixlast]+" "+notcleaned[aufix].upper().replace(".","") )
                posibAut.append( posibAut[-aufixlast]+" "+notcleaned[aufix].upper().replace("U", "V") ) 
                posibAut.append( posibAut[-aufixlast]+" "+notcleaned[aufix].upper()+".".replace("U", "V") )
                posibAut.append( posibAut[-aufixlast]+" "+notcleaned[aufix].upper().replace(".","").replace("U", "V") ) 
            
    for p in range(len(posibAut)):
        try:
            tllauthorcontent = abkAW.abkAW[ posibAut[p] ] # is now not string but array of possible authors

            
            if isinstance( tllauthorcontent, str):##referenzen innerhalb der knowledge base
                tllauthorcontent = abkAW.abkAW[ tllauthorcontent ]
            tllauthor = posibAut[ p ]
            break
        except:
            continue
   
    tllwork = False
    if( tllauthor ):
        extllwork = " ".join( notcleaned[len(tllauthor.split(" ")):] )
        if(switch):
            print("aa", tllauthor, extllwork, notcleaned)
        posibWer = [extllwork, 
                    extllwork.title(), 
                    extllwork.lower(), 
                    extllwork.upper(), 
                    extllwork+".",
                    extllwork.replace("v", "u").replace("V", "U"), 
                    extllwork.lower().replace("v", "u"),
                    extllwork.upper().replace("V", "U"), 
                    extllwork+".".replace("v", "u").replace("V", "U")]
        einzeln = extllwork.split(" ")
        for e in range(len(einzeln)):
            posibWer.append(einzeln[e])
            posibWer.append(einzeln[e].replace("v", "u").replace("V", "U"))
            posibWer.append(einzeln[e]+".")
            posibWer.append(einzeln[e]+".".replace("v", "u").replace("V", "U"))
            posibWer.append(einzeln[e].upper())
            posibWer.append(einzeln[e].upper().replace("V", "U"))
            posibWer.append(einzeln[e].lower().replace("v", "u"))
            posibWer.append(einzeln[e].lower())
        for pp in range(len(posibWer)):
            for tlla in range(len(tllauthorcontent)):
                try:
                    tllauthorcontent[ tlla ][2][ posibWer[pp] ]
                    tllwork = posibWer[pp]
                    pp = (posibWer)
                    break
                except:
                    continue
        if(switch):
            print("aa", tllauthor, extllwork, notcleaned, tllwork)
        if(tllwork == False):
            if(extllwork != ""):
                tllwork = extllwork
        if(switch):
            print("aa", tllauthor, extllwork, notcleaned, tllwork)
    else:
        print("NOOOOOOTTTTT found in Ruecker", tllstr) 
        global dumpnotinruecker  
        dumpnotinruecker = dumpnotinruecker +" "+  tllstr + "\n";
    return tllauthor, tllwork

def extractFROMSEC( secstr ):
    text = ""
    try:
        text = secstr.split( "</title>" )[1].replace("<p>", "<line>").replace("</p>", "</line>").replace("<p/>", "<line></line>")
    except:
        return [[], [], ""]
    levels = secstr.split('</kwd-group>' )[0].split('<kwd-group kwd-group-type="etoc">')[1].split("</compound-kwd-part>")
    levelaszahl = []
    levelasliteral = []
    for l in range(len(levels)):
        try:
            splev = levels[l].split('<compound-kwd-part')[1].split(">")[1].split(" ")
            nspllev = []
            for sp in range(len(splev)):
                try:
                    nspllev.append( str( roman.fromRoman( splev[sp].replace(".", "") ) ) )
                except:
                    nspllev.append( splev[sp] )
            levels[l] = " ".join( nspllev ) 
        except:
            continue
        
        letters = list(levels[l])
        waszahld = False
        thefirstziffer = []
        for le in range(len(letters)):
            try:
                num = int( letters[le] )
                waszahld = True
                thefirstziffer.append( letters[le] )
            except:
                if( waszahld ):
                    break
            
        if(len(thefirstziffer) > 0):      
            levelaszahl.append(int("".join(thefirstziffer)))
        else:
            levelaszahl.append(False)
        levelasliteral.append(levels[l])
        
    erg = [levelaszahl, levelasliteral, text]
    
    return erg

##----------------RUN PROGRAM
if __name__ == "__main__":
    #in
    print("BTL XML to CTS XML REPO")

    CTSxmlSTR = []
    countuncertain = 0
    allcount = 0
    
    hcstnavarray = { NSSS: {}}
    #create structure
    os.mkdir( hsctaFolder )
    os.mkdir( hsctaFolder+"/"+NSSS )

    #run over xml files
    for f in range( len( filenames ) ):
        DICTofAundWundSec = {}
        rawfile = open( filenames[f], "r" )
        BTLxmlSTR = rawfile.read()
        rawfile.close()  
        
        BOOKpartssC = BTLxmlSTR.split('</book-part>')
        #BOOKpartssO = BTLxmlSTR.split('<book-part ')
        print( filenames[f], "with ", len(BOOKpartssC), "bookpartssC and")#, len(BOOKpartssO), "BOOKpartssO")
        
        for b in range( len(BOOKpartssC) ):
            allcount+=1
            if('<book-part-meta>' in BOOKpartssC[b] ):
                Bookpartmeta, BookpartBody = divBookpart( BOOKpartssC[b] )
             
                titel = extractTITLE(Bookpartmeta)
                author = extractAUTHOR(Bookpartmeta)
                tll = extractTLL(Bookpartmeta)
                tllauthor = False
                tllwork = False
                if( tll ):
                    tllauthor, tllwork = extractTLLINFOS( tll )
                else:
                    if(author == False):
                        print( "Only titel given", titel )
                        countuncertain += 1
                        author = ""
                    tll = ""
                    #break
                
                ##
                print("-", tllauthor, tllwork)
                if((not tllauthor) and author):
                    tllauthor = author.replace("\n", "")
                if((not tllwork) and titel):
                    tllwork = titel.replace("\n", "")

                ##
                print("--", tllauthor, tllwork)
                if(tllauthor and tllwork):
                    
                    try: 
                        DICTofAundWundSec[ tllauthor ] 
                        try:
                            DICTofAundWundSec[ tllauthor ][ tllwork ]
                        except:
                            DICTofAundWundSec[ tllauthor ][ tllwork ] = []
                    except:
                        DICTofAundWundSec[ tllauthor ] = { tllwork:[] }

                            

                    sectionsofbody = BookpartBody.split("</sec>")
                    counttt = 0
                    for s in range(len(sectionsofbody)):
                        xtracted = extractFROMSEC(sectionsofbody[s])
                        counttt += len( xtracted[2].strip().split( " " ) )
                        DICTofAundWundSec[ tllauthor ][ tllwork ].append( xtracted )
                    #goon with the sec splitting
                    print( tllauthor , author ,tllwork,titel,tll, str( counttt ) )
                    if(author == False):
                        author = tllauthor
                    dumpthewordcountsofeachexml = dumpthewordcountsofeachexml + author +";" + titel+ ";" + str( counttt ) + ";"+ tll + "\n"
                    
        
            
        for A in DICTofAundWundSec:
            try:
                os.mkdir( hsctaFolder+"/"+NSSS+"/"+A ) 
                print("make", A)
            except:
                print("insert", A)
                pass
            
            hcstnavarray[NSSS][A] = {}
            for W in DICTofAundWundSec[A]:
                try:
                    os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W ) 
                except:
                    pass
                try:
                    hcstnavarray[NSSS][A][W]
                except:
                    hcstnavarray[NSSS][A][W] = {}
                
                for i in range(len(DICTofAundWundSec[A][W])):
                    if(len(DICTofAundWundSec[A][W][i][0]) == 1 and DICTofAundWundSec[A][W][i][0][0]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))
                        except:
                            pass
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] += 1
                        except:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = 1
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( )   

                    elif(len(DICTofAundWundSec[A][W][i][0]) == 2 and 
                              DICTofAundWundSec[A][W][i][0][0] and 
                              DICTofAundWundSec[A][W][i][0][1]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))

                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1]))
                        except:
                            pass
                            
                        #
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]]
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = {DICTofAundWundSec[A][W][i][0][1]:0}
                            except:
                                pass
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] += 1
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] = 1
                            except:
                                pass
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( )
                            
                    elif(len(DICTofAundWundSec[A][W][i][0]) == 3 and 
                              DICTofAundWundSec[A][W][i][0][0] and 
                              DICTofAundWundSec[A][W][i][0][1] and
                              DICTofAundWundSec[A][W][i][0][2]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2]))
                        except:
                            pass
                        #############################
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]]
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = {DICTofAundWundSec[A][W][i][0][1]:{DICTofAundWundSec[A][W][i][0][2]:0}}
                            except:
                                pass
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] 
                               
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] = {DICTofAundWundSec[A][W][i][0][2]:0}
                            except:
                                pass
            
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] += 1
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] = 1
                            except:
                                pass
                                    
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                     str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                  str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( ) 
                    elif(len(DICTofAundWundSec[A][W][i][0]) == 4 and 
                              DICTofAundWundSec[A][W][i][0][0] and 
                              DICTofAundWundSec[A][W][i][0][1] and
                              DICTofAundWundSec[A][W][i][0][2] and
                             DICTofAundWundSec[A][W][i][0][3]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3]))
                        except:
                            pass
                        #############################
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]]
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = {DICTofAundWundSec[A][W][i][0][1]:{DICTofAundWundSec[A][W][i][0][2]:0}}
                            except:
                                pass
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] 
                               
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] = {DICTofAundWundSec[A][W][i][0][2]:0}
                            except:
                                pass
            
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] = {DICTofAundWundSec[A][W][i][0][3]:0}
                            except:
                                pass

                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] += 1
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] = 1
                            except:
                                pass
                                    
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+str(DICTofAundWundSec[A][W][i][0][3])+"/"+str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( )
                    elif(len(DICTofAundWundSec[A][W][i][0]) == 5 and 
                              DICTofAundWundSec[A][W][i][0][0] and 
                              DICTofAundWundSec[A][W][i][0][1] and
                              DICTofAundWundSec[A][W][i][0][2] and
                             DICTofAundWundSec[A][W][i][0][3] and
                             DICTofAundWundSec[A][W][i][0][4]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][4]))
                        except:
                            pass
                        #############################
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]]
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = {DICTofAundWundSec[A][W][i][0][1]:{DICTofAundWundSec[A][W][i][0][2]:0}}
                            except:
                                pass
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] 
                               
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] = {DICTofAundWundSec[A][W][i][0][2]:0}
                            except:
                                pass
            
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] = {DICTofAundWundSec[A][W][i][0][3]:0}
                            except:
                                pass

                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] = {DICTofAundWundSec[A][W][i][0][4]:0}
                            except:
                                pass
                        ##
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]] += 1
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]] = 1
                            except:
                                pass
                                    
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+str(DICTofAundWundSec[A][W][i][0][3])+"/"+str(DICTofAundWundSec[A][W][i][0][4])+"/"+str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( )
                    elif(len(DICTofAundWundSec[A][W][i][0]) == 6 and 
                              DICTofAundWundSec[A][W][i][0][0] and 
                              DICTofAundWundSec[A][W][i][0][1] and
                              DICTofAundWundSec[A][W][i][0][2] and
                             DICTofAundWundSec[A][W][i][0][3] and
                             DICTofAundWundSec[A][W][i][0][4] and
                             DICTofAundWundSec[A][W][i][0][5]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][4]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][4])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][5]))
                        except:
                            pass
                        #############################
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]]
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = {DICTofAundWundSec[A][W][i][0][1]:{DICTofAundWundSec[A][W][i][0][2]:0}}
                            except:
                                pass
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] 
                               
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] = {DICTofAundWundSec[A][W][i][0][2]:0}
                            except:
                                pass
            
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] = {DICTofAundWundSec[A][W][i][0][3]:0}
                            except:
                                pass

                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] = {DICTofAundWundSec[A][W][i][0][4]:0}
                            except:
                                pass
                        ##
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]] = {DICTofAundWundSec[A][W][i][0][5]:0}
                            except:
                                pass
                        ##
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]][DICTofAundWundSec[A][W][i][0][5]] += 1
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]][DICTofAundWundSec[A][W][i][0][5]] = 1
                            except:
                                pass
                                    
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+str(DICTofAundWundSec[A][W][i][0][3])+"/"+str(DICTofAundWundSec[A][W][i][0][4])+"/"+str(DICTofAundWundSec[A][W][i][0][5])+"/"+str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( )
                    elif(len(DICTofAundWundSec[A][W][i][0]) == 7 and 
                              DICTofAundWundSec[A][W][i][0][0] and 
                              DICTofAundWundSec[A][W][i][0][1] and
                              DICTofAundWundSec[A][W][i][0][2] and
                             DICTofAundWundSec[A][W][i][0][3] and
                             DICTofAundWundSec[A][W][i][0][4] and
                             DICTofAundWundSec[A][W][i][0][5] and
                             DICTofAundWundSec[A][W][i][0][6]):
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][4]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][4])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][5]))
                        except:
                            pass
                        try:
                            os.mkdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][3])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][4])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][5])+"/"+
                                                                            str(DICTofAundWundSec[A][W][i][0][6]))
                        except:
                            pass
                        #############################
                        try:
                            hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]]
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][DICTofAundWundSec[A][W][i][0][0]] = {DICTofAundWundSec[A][W][i][0][1]:{DICTofAundWundSec[A][W][i][0][2]:0}}
                            except:
                                pass
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] 
                               
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][DICTofAundWundSec[A][W][i][0][1]] = {DICTofAundWundSec[A][W][i][0][2]:0}
                            except:
                                pass
            
                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]] = {DICTofAundWundSec[A][W][i][0][3]:0}
                            except:
                                pass

                        #
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]] = {DICTofAundWundSec[A][W][i][0][4]:0}
                            except:
                                pass
                        ##
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]] = {DICTofAundWundSec[A][W][i][0][5]:0}
                            except:
                                pass
                        ##
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]][DICTofAundWundSec[A][W][i][0][5]] 
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]][DICTofAundWundSec[A][W][i][0][5]] = {DICTofAundWundSec[A][W][i][0][6]:0}
                            except:
                                pass
                         ##
                        try:
                            hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]][DICTofAundWundSec[A][W][i][0][5]][DICTofAundWundSec[A][W][i][0][6]] += 1
                        except:
                            try:
                                hcstnavarray[NSSS][A][W][ DICTofAundWundSec[A][W][i][0][0] ][ DICTofAundWundSec[A][W][i][0][1]][ DICTofAundWundSec[A][W][i][0][2]][ DICTofAundWundSec[A][W][i][0][3]][ DICTofAundWundSec[A][W][i][0][4]][DICTofAundWundSec[A][W][i][0][5]][DICTofAundWundSec[A][W][i][0][6]] = 1
                            except:
                                pass
                                    
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+str(DICTofAundWundSec[A][W][i][0][0])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][1])+"/"+
                                                                           str(DICTofAundWundSec[A][W][i][0][2])+"/"+str(DICTofAundWundSec[A][W][i][0][3])+"/"+str(DICTofAundWundSec[A][W][i][0][4])+"/"+str(DICTofAundWundSec[A][W][i][0][5])+"/"+str(DICTofAundWundSec[A][W][i][0][6])+"/"+str("_".join(DICTofAundWundSec[A][W][i][1])).replace(",","").replace("/","")+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( )
                    else:  
                        if(len(DICTofAundWundSec[A][W][i][0]) > 7):
                            print(DICTofAundWundSec[A][W][i][1], hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/" )
                            raise NameError('TOOOO long Levels') 
                           
                        #count files in folder add one and con to string and use it as name
                        fname = str(len(os.listdir( hsctaFolder+"/"+NSSS+"/"+A+"/"+W ))+1)
                        try:
                            fname = " ".join( DICTofAundWundSec[A][W][i][1] ).replace(",","").replace("/","")
                        except:
                            pass
                        o = open( hsctaFolder+"/"+NSSS+"/"+A+"/"+W+"/"+fname+".xml", "a" )
                        o.write( DICTofAundWundSec[A][W][i][2] )
                        o.close( ) 

    #json dump of structure   
    outfile = open( "hctsa.js", "w" )
    outfile.write( "var hctsnav = " + str(hcstnavarray)+";" )
    outfile.close( )                  
               
    #write the dumps
    outfile2 = open( "dumpnotinruecker.csv", "w" )
    outfile2.write( dumpnotinruecker )
    outfile2.close( )     
      
      
    outfile3 = open( "dumpthewordcountsofeachexml.csv", "w" )
    outfile3.write( dumpthewordcountsofeachexml )
    outfile3.close( )       
            
    print( countuncertain, allcount )
    
 
    print("End all")
