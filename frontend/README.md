# Links CTS/REFEXT Project

## CTS URL 
http://cts-altegeschichte-leipzig.de/CTS/NS/...

## CTS URN RESOLVER
http://cts-altegeschichte-leipzig.de/hcts.html?GetPassage.php&urn=CTS:NS:...

## CTS Frontend

http://cts-altegeschichte-leipzig.de/CTS/hcts.html

(Input of text to build own CTS repositories, Perikels Vita Project)

http://cts-altegeschichte-leipzig.de/hcts.html?GetCapabilities(&urn=)

(cts core: see GetCapabilities Manual, humand readable)

http://cts-altegeschichte-leipzig.de/hcts.html?GetPassage&urn=

(cts core: see GetPassage Manual, humand readable GetPassage output)

http://cts-altegeschichte-leipzig.de/hcts.html?CTSproxy

(refext: Proxy to add cts urn to any page, tllr example, deprecated)

http://cts-altegeschichte-leipzig.de/hcts.html?REFtoCTSURN

(refext: second example)

## RefExt Frontend
http://cts-altegeschichte-leipzig.de/CTS/refext.html

# Notes on this implementation

We provide both URN and URL input. With URN we have a smalle and exchange and generation target for passages. Since passages could also be locations, we add URL. URL implements a online Interface for software as well. The presentation through the fronten is human and interaction centered. We implent just a subset of the CTS Definition getPassage and getCapabilities. 

# Code
Since most of the frontend is part of a new project we will provide code during this project.
