# ModLoaderPreprocessor

Il preprocessore modLoaded esegue solo uno script, se una certa mod è presente.

## Chiama

Hai chiamato il preprocessore modLoaded aggiungendo `#modloaded modID` al tuo file di script, with `modID` being the modId you want to check for:  
Esempio: `#modloaded minecraft`

Puoi anche fornire più modID:  
`#modloaded minecraft tconstruct` saranno eseguiti solo se minecraft e tconstruct sono caricati.

Puoi anche invertire una condizione di mod in modo che la mod venga caricata solo se la mod NON è caricata: `#modloaded ! constructct minecraft` sarà eseguito solo se minecraft è presente e tconstructct NON è presente

## Che cosa fa

Se hai aggiunto questo preprocessore a uno script, sarà eseguito solo se i modID forniti sono presenti, in altre parole, se le mod rispettanti sono caricate.