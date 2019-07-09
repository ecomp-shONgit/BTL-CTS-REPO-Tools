#!/usr/bin/env python
# -*- coding: utf-8 -*-


# 2017 CTS Project, Prof. Charlotte Schubert, Alte Geschichte Leipzig
# Function: split MPL SGML TO CTS / AUGUSTIUS Example

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

import os, codecs, unicodedata, time, hashlib

################################### configure
infolder = "MPL-Augustinus"
hsctaFolder = "/Path/to"
NSSS = "MPL"
    
def removerestTAGS(strstr):
    st = strstr.split(">")
    retstr = ""
    for s in st:
        if("<" in s):
            retstr += s.split("<")[0]
        else:
            retstr += s
    return retstr

if __name__ == "__main__":
    print("Loosss!!!!")
    augustinFiles = os.listdir( infolder )

    try:
        os.mkdir( hsctaFolder+"/"+NSSS )
    except:
        pass
    

    for fa in augustinFiles:
        band = int(fa.split("-")[0])
        try:
            os.mkdir( hsctaFolder+"/"+NSSS+"/PL "+ str( int(band) ) )
        except:
            pass
        augustfilehandel = open( "%s/%s" % (infolder, fa ), "r" )
        auData = augustfilehandel.read()
        
        augustfilehandel.close() 

        columns = auData.split( '<COL N="' )
        colNum = 0
        for col in columns:
            if(col == ""):
                continue
            colNumAnd = col.split('">')
            try:
                colNum =  int(colNumAnd[0])
            except:
                
                try: 
                    if( len( colNumAnd[0]) == 5 ):
                        colNum = int(colNumAnd[0][0:-1])
                    elif( colNum == 0 and 'COM="' in col):
                        colNum = int(col.split('COM="')[1].split('"')[0])
                    else:
                        print(colNum, col)
                except:
                    print(colNum, col)
            towrite = '">'.join( colNumAnd[1:] ) 
            print( colNum )
            try:
                os.mkdir( hsctaFolder+"/"+NSSS+"/PL "+ str( int(band) )+"/"+str(colNum) )
            except:
                pass
            o = open( hsctaFolder+"/"+NSSS+"/PL "+ str( band )+"/"+str(colNum) +"/"+str(colNum)+".xml", "a" )
            o.write( towrite )
            o.close( )
            
        print("--",band,"--")
