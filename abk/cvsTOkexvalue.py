#!/usr/bin/python
# -*- coding: utf-8 -*-

# 2016/2018 BTL CTS Project, Prof. Charlotte Schubert, Alte Geschichte Leipzig
# Function: .CSV TO KEY VALUE LIST (usable in Python, JS)

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


import json, codecs


###################################
#CONFIG IN AND OUT FILENAME

INNAMEFILE = "index_tll_final.csv"
OUTNAMEFILE = "TLLabk2.txt"

###################################


fO = codecs.open( INNAMEFILE, "r")
text = fO.read()
fO.close()
lines = text.split("\n")

keyValue = {}

kurz = ""
lang = ""
wkwl = { }
metadata = [ "","","","" ]
letzeabk = ""

for l in range( len( lines ) ):
    lparts = lines[ l ].split("\t")

    for k in range( len( lparts ) ):
        lparts[ k ] = lparts[ k ].strip()
    try:
        lparts.index(" ")
        print("error leerzeichen als index")
        print(lparts)
    except:
        1+1
    if( lparts[ 0 ] != kurz and kurz != "" and lparts[ 0 ] != "" ):
        #print(l, "kurz", kurz, "---lang", lang,  "wkwl", wkwl)
        
        if( kurz in keyValue ):
            #append
            keyValue[ kurz ].append( [ lang, wkwl, metadata ] )
        else:
            #add
            keyValue[ kurz ] = [ [ lang, wkwl, metadata ] ]
        #del
        
        wkwl = {}
        metadata = ["","","",""]
        letzeabk = ""
        if( lparts[ 1 ] != "" ):
            lang = lparts[ 1 ] #lang autor
        else:
            lang = "" #hat keine

    if( lparts[ 0 ] != "" ): #NEW kurz
        kurz = lparts[ 0 ]
        if( lparts[ 1 ] != "" ):
            lang = lparts[ 1 ] #lang autor - wenn keinen lang autor hat, dann lass mal ist der vorher gemeint
        #so ins array
        #index 4 ist Notiz
        #index 2 & 3 sind Datum Anfang Ende
        #index 10 ist Zusatz, kommt an zweite Stelle und kann als Zuornung berücksichtigt werden
        metadata = [ lparts[ 2 ], lparts[ 3 ], lparts[ 4 ], lparts[ 10 ] ]
    #add wlwk
    if( len(lparts) > 4 ):

        if( lparts[ 5 ] != "" and lparts[ 6 ] == "" and lparts[ 7 ] == "" and lparts[ 8 ] == "" ):
            wkwl[ lparts[ 5 ] ] = lparts[ 5 ] #kurz und kurz werke
            
        elif( lparts[ 5 ] == "" and lparts[ 6 ] != "" and lparts[ 7 ] == "" and lparts[ 8 ] == "" ):
            wkwl[ lparts[ 6 ] ] = lparts[ 6 ] #nur lang werke
            
        elif( lparts[ 5 ] != "" and lparts[ 6 ] != "" and lparts[ 7 ] == "" and lparts[ 8 ] == "" ):
            wkwl[ lparts[ 5 ] ] = lparts[ 6 ] #lang und kurz werke

        elif( lparts[ 5 ] == "" and lparts[ 6 ] == "" and lparts[ 7 ] != "" and lparts[ 8 ] != "" ):
            if( letzeabk != "" ):
                wkwl[ letzeabk+" "+lparts[ 7 ] ] = lparts[ 8 ] #lang und kurz unterwerkwerke - tut das not???
            else:
                wkwl[ lparts[ 7 ] ] = lparts[ 8 ] #lang und kurz unterwerke

        elif( lparts[ 5 ] != "" and lparts[ 6 ] != "" and lparts[ 7 ] != "" and lparts[ 8 ] == "" ):
            wkwl[ lparts[ 5 ]+" "+lparts[ 6 ] ] = lparts[ 7 ] #lang und kurz unterwerke

        elif( lparts[ 5 ] == "" and lparts[ 6 ] != "" and lparts[ 7 ] != "" and lparts[ 8 ] != "" ):
            wkwl[ lparts[ 7 ] ] = lparts[ 8 ] #lang und kurz unterwerke

        elif( lparts[ 5 ] != "" and lparts[ 6 ] != "" and lparts[ 7 ] != "" and lparts[ 8 ] != "" ):
            wkwl[ lparts[ 5 ] ] = lparts[ 6 ] #lang und kurz werke
            wkwl[ lparts[ 7 ] ] = lparts[ 8 ] #lang und kurz unterwerke

                

with open( OUTNAMEFILE, 'w') as outfile:
    json.dump( keyValue, outfile, indent=1 )


   
print( "Ende" )

