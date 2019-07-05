
/*
* 2017/2019 BTL CTS Project, Prof. Charlotte Schubert, Alte Geschichte Leipzig
* Scope: WEBSITE Proyecto Diccionario Griego-Español to LIST build
*
* Usage
* 1. build cargo project add main.rs, modifie Cargo.toml and add 
*    [dependencies]
*    reqwest = "0.9.16"
* 2. cargo run
*
* GPLv3 copyrigth
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*   
* 
*/

extern crate reqwest;
use std::io::Read;
use std::fs;

fn main() -> std::io::Result<()> {
    let urls = [
            "http://dge.cchs.csic.es/lst/l1-a1.htm",
            "http://dge.cchs.csic.es/lst/l1-a2.htm",
            "http://dge.cchs.csic.es/lst/l1-a3.htm",
            "http://dge.cchs.csic.es/lst/l1-b.htm",
            "http://dge.cchs.csic.es/lst/l1-c1.htm",
            "http://dge.cchs.csic.es/lst/l1-c2.htm",
            "http://dge.cchs.csic.es/lst/l1-d.htm",
            "http://dge.cchs.csic.es/lst/l1-e.htm",
            "http://dge.cchs.csic.es/lst/l1-f.htm",
            "http://dge.cchs.csic.es/lst/l1-g.htm",
            "http://dge.cchs.csic.es/lst/l1-h.htm",
            "http://dge.cchs.csic.es/lst/l1-i-k.htm",
            "http://dge.cchs.csic.es/lst/l1-l.htm",
            "http://dge.cchs.csic.es/lst/l1-m.htm",
            "http://dge.cchs.csic.es/lst/l1-n-o.htm",
            "http://dge.cchs.csic.es/lst/l1-p1.htm",
            "http://dge.cchs.csic.es/lst/l1-p2.htm",
            "http://dge.cchs.csic.es/lst/l1-q-r.htm",
            "http://dge.cchs.csic.es/lst/l1-s.htm",
            "http://dge.cchs.csic.es/lst/l1-t.htm",
            "http://dge.cchs.csic.es/lst/l1-v-z.htm"
                ];
    let httpclinet = reqwest::Client::new();
    let mut allresult = String::from( "A kurz;; Aname lang;; zeit start;; zeit stopp;; Notizen;; abk werk;; Werk;; unterwek abk;; unterwekr;; leer;; zusatz\n");
    let mut count: i16 = 0;
    for url in urls.iter() {
        println!("{}", url );
        let mut resp = httpclinet.get( &url.to_string() ).send().expect("Failed to send request");
        let mut buf = Vec::new();
        resp.read_to_end( &mut buf ).expect("Failed to read response");
        let s = String::from_utf8_lossy( &buf ).replace("&iuml;", "ï").replace("&iacute;", "í").replace("&eacute;", "é").replace("&oacute;","ó").replace("&uacute;","ú").replace("&ntilde;","ñ").replace("&euml;", "ë").replace("&uuml;", "ü").replace("&Uuml;", "Ü").replace("&auml;", "ä").replace("&Auml;", "Ä").replace("&ouml;", "ö").replace("&Ouml;", "Ö").replace("width", "WIDTH").replace("valign","VALIGN").replace("</b>","</B>").replace("<b>","<B>").replace("</i>","</I>").replace("<i>","<I>").replace("<br>","<BR>").replace("</td>","</TD>") .replace("<td","<TD").replace("</tr>","</TR>").replace("\r\n", " ").replace("\n\r", " ").replace("\n", " ").replace("\r", " ").replace("     ", "").replace(".", ". ").replace("  ", " ");
        let v: Vec<&str> = s.split( "VALIGN=\"TOP\">&nbsp;</TD></TR>" ).collect(); //müssten die Trenner Sein zwischen Zeileneinträgen
        
        println!("aut per {}", v.len());
        let mut countsep: i16 = 0;
        for j in 0 .. v.len() {
            count+=1;
            countsep+=1;
            let vv: Vec<&str> = v[j].split( "</TR>" ).collect();
            let mut indextouse = 0;
            if ! vv[indextouse].contains( "</TD>" ) ||  vv[indextouse].contains( "<HEAD>" ) || vv[indextouse].contains( "</table></TD>" ) {
                indextouse = 1;
            }
            let zeitundaname: Vec<&str> = vv[indextouse].split( "</TD>" ).collect( );
            let allezeit: Vec<&str> = zeitundaname[0].split( ">" ).collect( );
            
            let alleaname: Vec<&str> = zeitundaname[1].split( "<TD WIDTH=\"85%\" VALIGN=\"TOP\">" ).collect( );
            let aname: Vec<&str> = alleaname[alleaname.len()-1].split( "(<A NAME=\"" ).collect( );

            let ohnebreins: String = aname[0].replace("</B>", "");
            let autorlang: String = ohnebreins.trim_end().trim_start().replace("<B>", "");
            let mut autkurz: String = autorlang.to_uppercase();
            
            if aname.len() > 1 {
                let namekurzundnoch: Vec<&str> = aname[1].split("\"").collect( );
                autkurz = String::from( namekurzundnoch[0] ).trim_end().trim_start().to_uppercase();
            } 
            //tll A kurz; Aname lang; zeit start; zeit stopp; Notizen; abk werk; Werk; unterwek abk; unterwekr; leer; zusatz 
            let resuparteins: String = format!("{};;{};;{};; ;; ;; ;; ;; ;; ;; ;;\n", autkurz, autorlang, allezeit[allezeit.len()-1].replace("&nbsp", "").replace(";", "") );
            allresult.push_str( &resuparteins );
            
            for i in 1..(vv.len( )-1){
                let mut kw: String = String::from("");
                let mut lw: String = String::from(""); 
                if vv[ i ].contains( ". =" ) {
                    //println!("Auf Werke unters {}", vv[ i ]);
                    let workis: Vec<&str> = vv[ i ].split( "<BR>" ).collect( );
                    for k in 0..workis.len() {
                        if workis[ k ].contains( "</I>" ) {
                            let kurzlang: Vec<&str> = workis[ k ].split( "</I>" ).collect( );
                            let kurzw: Vec<&str> = kurzlang[0].split( "<I>" ).collect( );
                            let mut chosethis = 1;
                            if kurzw.len() == 1 {
                                chosethis = 0;
                            }
                            kw = String::from( kurzw[chosethis] );
                            if kurzlang.len() > 2 {
                                let langw: Vec<&str> = kurzlang[1].split( "<I>" ).collect( );
                                lw = langw[1].replace("\n","");
                            } else {
                                lw = String::from( kurzw[chosethis] );
                            }
                        } else {        
                            if workis[ k ].contains( ". =" ) {
                                let kurzlang: Vec<&str> = workis[ k ].split( ". =" ).collect( );
                                
                                let langw: Vec<&str> = kurzlang[1].split( "." ).collect( );
                                kw = String::from( kurzlang[0] );
                                lw = langw[0].replace("\n","");
                            }
                        }
                        let resupart: String = format!(";; ;; ;; ;; ;;{} ;;{} ;; ;; ;; ;;\n", kw, lw );
                        allresult.push_str( &resupart );
                    }
                }
            }
        }
    }
    println!("{}", allresult);
    println!("--- count of entries (Authors) {} ---", count);
    //writing
    fs::write( "dge.csv", allresult.replace(";;", "\t") ).expect("Unable to write file");
    Ok(())
}
