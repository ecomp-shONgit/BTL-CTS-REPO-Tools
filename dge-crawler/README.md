# How to

At first create a new Rust cargo project by

```
$ cargo new progname
```

Next you open the main.rs in the src/ folder and replace is content with the content of the main.rs here or you simply copy the main.rs to src/ of the cargo project. The last step is to compile/run program and get the result "dge.csv" saved to the main project folder.

```
$ cargo run
```

# structure of the csv file

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



