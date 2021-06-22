#!/usr/bin/python
# -*- coding: utf-8 -*-

# 2020 RefExt/Index-Projekt , Prof. Charlotte Schubert, Alte Geschichte Leipzig
# Wikipediadump of list of classical authors

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


import io, json, codecs, urllib.request
from bs4 import BeautifulSoup


###################################
#CONFIG IN AND OUT FILENAME
#INURL 

urls = [
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/A", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/B", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/C", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/D", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/E", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/F",  
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/G", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/H", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/I", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/J", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/K", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/L", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/M", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/N", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/O", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/P", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/Q", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/R", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/S", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/T", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/U", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/V", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/W", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/X", 
"https://de.wikipedia.org/wiki/Liste_der_Abk%C3%BCrzungen_antiker_Autoren_und_Werktitel/Z"
]

outname = "wikiPlistAAuto.csv"

###################################


print( "Anfang" )
mynewlist = "Autor Abkürzung\tAutor\tDatierung: start_year\tDatierung: end_year\tNotizen\tWerk Abkürzung\tWerk\tUnterwerke – Abkürzung \t Unterwerke\t \tZusatz\n"
for u in range( len( urls ) ):
    print(urls[u])
    
    with urllib.request.urlopen( urls[u] ) as response:
        website = response.read()
        #print( website )
        parsed_html = BeautifulSoup( website, features="lxml" )
        tablelines = parsed_html.body.find('table', attrs={'class':'wikitable'}).find_all('tr')
        count = 0
        for l in range(len(tablelines)):
            if(l < 2):
                continue
            zellen = tablelines[l].find_all('td')
            #autor
            if( len(zellen) == 3 ):
                #print("Autor", count)
                aabk = zellen[0].text.strip()
                if( aabk == "" ):
                    aabk = zellen[1].text.strip()
                mynewlist += ""+aabk+"\t"+zellen[1].text.strip()+" \t \t \t "+zellen[2].text.strip()+" \t \t \t \t \t \t \n"
            #werk
            elif( len(zellen) == 4 ):
                zellen[1].text
                #print("Werk", count, "K:", zellen[1].text, "L:", zellen[2].text)
                wabk = zellen[1].text.strip()
                if( wabk == "" ):
                    wabk = zellen[2].text.strip()
                mynewlist += " \t \t \t \t \t "+wabk+" \t "+zellen[2].text.strip()+" \t \t \t \t \n"
            else:
                print("Err", count, len(zellen), tablelines[l])
            count += 1
        #print(thetable)
fifa = io.open( outname, "w", encoding="utf8" )
fifa.write( mynewlist )
fifa.close()
   
print( "Ende" )

