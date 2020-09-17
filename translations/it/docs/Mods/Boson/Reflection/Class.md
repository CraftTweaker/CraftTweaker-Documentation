# `Classe`

Una classe `` identifica una singola istanza di un tipo che è esposto a ZenScript. Almost everything in ZenScript is, in fact, an instance of a class, be it an `IItemStack` (which is an instance of that class) or an array of strings (which is an instance of `string[]`).

## Dettagli classe
La classe è situata nel pacchetto `zenscriptx.reflect` , rendendo `zenscriptx.reflect.Class` il nome completamente qualificato per l'importazione.

## Creare una nuova istanza
L'unico modo possibile per creare una nuova istanza di classe `` è attraverso uno dei due metodi statici, che prendono il nome della classe o un oggetto da ispezionare. La snippe che segue mostra le firme dei due metodi che possono essere utilizzati:

```zenscript
function byName(name as string) as Class?;
function from(instance as any) as Class?;
```

Entrambi i metodi possono restituire `null` (come mostrato dal `?` alla fine del tipo) perché c'è la possibilità per alcune classi di non avere un equivalente ZenScript o non sono letteralmente in grado di essere rappresentate come istanze di `Classe`.

Di seguito sono riportati alcuni esempi di utilizzo dei due metodi di fabbrica:

```zenscript
Class.byName("crafttweaker.item.IItemStack"); # restituisce una classe che rappresenta la classe IItemStack
. rom(<blockstate:minecraft:pumpkin>); # restituisce una Classe che rappresenta la Classe IBlockState
. yName("123"); # restituisce null perché nessuna classe con questo nome esiste (o può esistere, per quella materia)
```

## Proprietà
Una classe `` fornisce accesso in sola lettura a un certo insieme di proprietà, come illustrato nella tabella seguente:

| Nome Proprietà    | Tipo      | Descrizione                                                                                                                                            |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `simpleName`      | `stringa` | "Nome più corto" che può essere usato per fare riferimento alla classe (cioè `IItemStack` per `crafttweaker. tem.IItemStack`, `stringa` per `stringa`) |
| `qualificatoNome` | `stringa` | Nome completo che identifica in modo univoco questa classe nell'ambiente ZenScript (es. `crafttweaker.item.IItemStack` o `stringa`)                    |

## Metodi
`Classe` fornisce anche l'accesso a un singolo metodo che consente la conversione all'equivalente "nativo" (fare riferimento a [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) per ulteriori informazioni). La firma del metodo è la seguente:

```zenscript
function toNativeClass() as NativeClass?;
```

Il metodo può restituire `null` perché non tutti i tipi di ZenScript possono avere un equivalente nativo, ad es. alcuni array associativi potrebbero non essere perfettamente rappresentati in un ambiente nativo, che richiede un po 'di mangiatoia.
