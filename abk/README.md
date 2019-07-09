# Structure of the input csv files

The csv file is ";;" separated. Each row possibly contains the following information:

 - Akurz: first part of canonical textname canonical short term

-  Alang: first part of textname long term    

- t1: time start of A

- t2: time end of A

- note: any note on A

- Wkurz: second part of the canonical textname canonical short term

- Wlang: second part of the textname long term

- UWkurz: canonical addition to the second part of the textname canonical  short term

- UWlang: addition to the second part of the textname

- leer: empty

- Z: any note on W

If no first part is given, a enumeration of second parts is denoted.

# Usage

1. Get the Input .csv
2. configure script
3. run script
4. copy new abkAW files to the place you want to use it

## Get Input CSV

To get csv files, use the example files or compile them in your own using the given scripts.

Oxford Classical Dictionary: OCD_ABBREVIATIONS.csv

RÜCKER/TLL/PAN: -

Diccionario Griego-Español: dge.csv

## Configure script

Set the name of the input file and the name of the outputfile.

```
###################################
#CONFIG IN AND OUT FILENAME

#DGE
INNAMEFILE = "dge.csv"
OUTNAMEFILE = "dge.txt"

```
