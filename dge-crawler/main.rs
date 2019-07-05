
/*second rust WEBSITE to LIST build
*
* cargo build lili
* cargo run
* 
*/

extern crate reqwest;
use std::io::Read;
//use std::io::copy;
//use std::io::stdout;
//use std::io;
use std::fs;
//use std::fs::File;
//use std::io::Write;
//use std::path::Path;



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
        //println!("{}", resp.status());
        //if valid UTF8
        //let mut buf = String::new();
        //resp.read_to_string( &mut buf ).expect("Failed to read response");
        //if not valid UTF8
        let mut buf = Vec::new();
        resp.read_to_end( &mut buf ).expect("Failed to read response");
        //copy(&mut resp, &mut stdout()).expect("Failed to read response");
        //println!("{:?}", buf);
        let s = String::from_utf8_lossy( &buf ).replace("&iuml;", "ï").replace("&iacute;", "í").replace("&eacute;", "é").replace("&oacute;","ó").replace("&uacute;","ú").replace("&ntilde;","ñ").replace("&euml;", "ë").replace("&uuml;", "ü").replace("&Uuml;", "Ü").replace("&auml;", "ä").replace("&Auml;", "Ä").replace("&ouml;", "ö").replace("&Ouml;", "Ö").replace("width", "WIDTH").replace("valign","VALIGN").replace("</b>","</B>").replace("<b>","<B>").replace("</i>","</I>").replace("<i>","<I>").replace("<br>","<BR>").replace("</td>","</TD>") .replace("<td","<TD").replace("</tr>","</TR>").replace("\r\n", " ").replace("\n\r", " ").replace("\n", " ").replace("\r", " ").replace("     ", "").replace(".", ". ").replace("  ", " ");
        //println!("result: {}", s);  
        
        //let u: Vec<&str> = s.split("<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=1 WIDTH=611>").collect();
        let v: Vec<&str> = s.split( "VALIGN=\"TOP\">&nbsp;</TD></TR>" ).collect(); //müssten die Trenner Sein zwischen Zeileneinträgen
        
        //println!("{:?}", v);
        println!("aut per {}", v.len());
        let mut countsep: i16 = 0;
        for j in 0 .. v.len() {
            count+=1;
            countsep+=1;
            //println!("{} -------------------------------------\n {} \n################################{}/{}\n", count, v[j], countsep, v.len() );
            let vv: Vec<&str> = v[j].split( "</TR>" ).collect();
            //vv[0]; //handel 1.td zeit, b langform autor, name kurzform name
            
            let mut indextouse = 0;
            if ! vv[indextouse].contains( "</TD>" ) ||  vv[indextouse].contains( "<HEAD>" ) || vv[indextouse].contains( "</table></TD>" ) {
                indextouse = 1;
            }
            
            let zeitundaname: Vec<&str> = vv[indextouse].split( "</TD>" ).collect( );
            //println!( "index {} le {:?}", indextouse, zeitundaname );
            let allezeit: Vec<&str> = zeitundaname[0].split( ">" ).collect( );
            
            let alleaname: Vec<&str> = zeitundaname[1].split( "<TD WIDTH=\"85%\" VALIGN=\"TOP\">" ).collect( );
            let aname: Vec<&str> = alleaname[alleaname.len()-1].split( "(<A NAME=\"" ).collect( );

            let ohnebreins: String = aname[0].replace("</B>", "");
            let autorlang: String = ohnebreins.trim_end().trim_start().replace("<B>", "");
            let mut autkurz: String = autorlang.to_uppercase();
            
            if aname.len() > 1 {
                let namekurzundnoch: Vec<&str> = aname[1].split("\"").collect( );
                autkurz = String::from( namekurzundnoch[0] ).trim_end().trim_start().to_uppercase();
                
                //println!("Trim '{}', notrim '{}'", autkurz, String::from( namekurzundnoch[0] ) );
            } /*else {
                println!("Zeit {}, Aut lang {}, Autor kein kurz", allezeit[allezeit.len()-1], autorlang );
            }*/
            
            //tll A kurz; Aname lang; zeit start; zeit stopp; Notizen; abk werk; Werk; unterwek abk; unterwekr; leer; zusatz 
            let resuparteins: String = format!("{};;{};;{};; ;; ;; ;; ;; ;; ;; ;;\n", autkurz, autorlang, allezeit[allezeit.len()-1].replace("&nbsp", "").replace(";", "") );
            //eprintln!( "CSV Zeile FL: {}", resuparteins );
            allresult.push_str( &resuparteins );

            //alle weiteren sind dann 
            //werke und editionen (die ignoriere ich zunächst)
            
            for i in 1..(vv.len( )-1){
                
                let mut kw: String = String::from("");
                let mut lw: String = String::from(""); 
                if vv[ i ].contains( ". =" ) {
                    //println!("Auf Werke unters {}", vv[ i ]);
                    let workis: Vec<&str> = vv[ i ].split( "<BR>" ).collect( );
                    for k in 0..workis.len() {
                        //println!("{} werkund {} ", autkurz, workis[ k ]);
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
                        //println!( "CSV Zeile SL: {}", resupart );
                        allresult.push_str( &resupart );
                    }
                     
                }
                
                
            }
            
            
        }
        
       //break; 
    }
    println!("{}", allresult);
    println!("--- count of entries (Authors) {} ---", count);
    //writing
    fs::write( "dge.csv", allresult.replace(";;", "\t") ).expect("Unable to write file");
    //let mut resusplit = resu.split("</TR>");
    /*let mut htmloutput = String::from("<!DOCTYPE html><html lang=\"de\"><head></head><body>");

    for entry in fs::read_dir(".")? {
        let dir = entry?;
        htmloutput.push_str("<img src=\"");
        let t =  dir.file_name();
        let tt = t.into_string();
        let final_awesome_result = tt.unwrap();
        htmloutput.push_str( &final_awesome_result );
        htmloutput.push_str("\"/><br>\n");
        
        println!("{:?}", &final_awesome_result);
    }
    htmloutput.push_str("</body></html>");
    //println!("{:?}",htmloutput);
    let mut file = File::create("testzwei.html")?;
    file.write_all( htmloutput.as_bytes() )*/
    //return value Ok ist kein Error
    Ok(())
}
