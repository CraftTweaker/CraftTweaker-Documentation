# Direttiva Sperimentale Sul Preprocessore Delle Bandiere

Questa direttiva preprocessore abilita alcuni comportamenti sperimentali per alcune funzionalità ZenScript.

Far parte del progetto ZenScriptX e per la natura sperimentale del progetto in sé, alcune caratteristiche possono richiedere ampie prove sul lato compilatore o causare altri effetti collaterali indesiderati. Per questi motivi, alcune caratteristiche sono state ritenute sperimentali e non sono state abilitate di default durante la compilazione di uno script.

Inoltre, alcune bandiere sperimentali possono non funzionare e sono fornite solo come suggerimenti di funzioni imminenti. Si dovrebbe sempre fare riferimento alla documentazione per sapere se un determinato flag è usato o meno. On the other hand, experimental flags will never be removed, meaning that features that are integrated into the "non-experimental" part of ZenScriptX won't have their flags disabled. Ciò consente agli script di essere compatibili con i rilasci più recenti del progetto ZenScriptX senza che richieda una riscrittura.

## Utilizzo della direttiva
Utilizzare la direttiva è semplice come aggiungere `#sperimentale` all'inizio del file, e specificando un elenco di flag che rappresentano il comportamento da abilitare subito dopo la dichiarazione.

Ogni bandiera deve essere separata dagli altri con spazi e **deve** iniziare con `-E`. Questo identifica la bandiera come una bandiera sperimentale. In seguito a tale dichiarazione, occorre inserire una serie di lettere e numeri che identificano il contrassegno specifico . Fare riferimento alla lista in questa documentazione per conoscere tutti i flag disponibili.

Ad esempio, immaginiamo di voler abilitare le bandiere `soo` e `wd4`. La linea corrispondente sarebbe la seguente:
```zenscript
#sperimentale -Esoo -Ewd4
```

## Elenco delle bandiere
| Nome contrassegno | Stato Attuale | Descrizione                                                                             |
| ----------------- | ------------- | --------------------------------------------------------------------------------------- |
| `soo`             | Disabilitato  | Abilita il sovraccarico dell'operatore per le sequenze                                  |
| `saia`            | Disabilitato  | Fornisce un argomento `automatico` per le funzioni con un singolo parametro in Sequenze |
| `sao`             | Abilitato     | Consente la creazione di `Sequenze` da argomenti array                                  |

Il significato dello stato attuale è il seguente:

- **Disabilitato** identifica un flag che esiste ma non ha azioni corrispondenti a causa del fatto che il backend non è pronto. E ' fornito solo a causa di "roadmap", consentendo agli sviluppatori di sapere quali nuove funzionalità saranno disponibili nel prossimo futuro.
- **Abilitato** identifica un flag che esiste e ha un effetto sul file.
- **Deprecated** identifies a flag that shouldn't be used anymore due to a feature reaching maturity and not being considered experimental anymore. Esso è tuttavia fornito come una forma di retrocompatibilità.
