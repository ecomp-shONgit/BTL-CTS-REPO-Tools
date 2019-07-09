# Usage
1. obtain the abAW knowledge base
2. configure the script
3. run script
4. check the CTS REPO

##



## Configure script

Set target folder name and CTS namespace.

```

##-----------------CONFIGURATION OF THE SCRIPT
...
hsctaFolder = "/path/to/the/repository/base/folder" #filesystem target
NSSS = "BTL" #namespace of the repository
filenames = ["ooo.xml","ooo.xml","ooo.xml","ooo.xml","ooo.xml","ooo.xml",...]#BTL dump input files

```

## Run Script and check repository

The script is usable with python 2.7 and a Version of Python 3.

```

$ python 2BTLtoCTS.py

```

There is a output of all written CTS parts, with wordcount and naming. Also there is a output of uncertain canonical naming and of not canonical naming.
