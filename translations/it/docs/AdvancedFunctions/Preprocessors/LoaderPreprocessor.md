# LoaderPreprocessor

Il preprocessore del caricamento imposterà il caricatore dello script.

## Chiama

Si chiama il preprocessore del caricatore aggiungendo `#loader loaderName` al tuo file script con `loaderName` che è il nome del caricatore a cui si desidera assegnare lo script.  
Esempio: `#loader contenttweaker`

## Che cosa fa

Gli script con il preprocessore del caricatore verranno caricati solo dal caricatore specificato.  
Nell'esempio sopra, il caricatore di crafttweaker non toccherà il file, invece il caricatore chiamato "contentTweaker" eseguirà lo script.  
Se non specifichi quel preprocessore, sarà predefinito essere "crafttweaker".