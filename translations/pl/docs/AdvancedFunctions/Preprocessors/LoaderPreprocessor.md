# LoaderPreprocesor

Preprocesor loadera ustawi ładowarkę skryptu.

## Połącz

Zadzwonisz do Preprocesora loadera dodając `#loader loaderName` do pliku skryptu z `loaderName` jako nazwę loadera, do którego chcesz przypisać skrypt  
Przykład: `#loader contenttweaker`

## Co to robi

Skrypty z preprocesorem loadera będą załadowane tylko przez określony ładunek.  
W powyższym przykładzie loader crafttweakera nie dotknie pliku, zamiast tego ładunek o nazwie "contentTweaker" wykona ten skrypt.  
Jeśli nie określisz tego preprocesora, domyślnie będzie to "crafttweaker".