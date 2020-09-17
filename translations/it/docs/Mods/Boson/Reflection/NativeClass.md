# `Classe Nativa`

Una `NativeClass` identifica l'istanza di una classe dell'ambiente del backend dietro ZenScript. Nel caso di CraftTweaker, `NativeClass` rappresenta quindi una classe Java.

## Dettagli classe
La classe è situata nel pacchetto `zenscriptx.reflect` , rendendo `zenscriptx.reflect.NativeClass` il nome completamente qualificato per l'importazione.

## Creare una nuova istanza
L'unico modo possibile per creare una nuova istanza `NativeClass` è attraverso uno dei due metodi statici, che prendono il nome della classe o un oggetto da ispezionare. The snippe that follows shows the signatures of the two methods that can be used:

```zenscript
function byName(name as string) as NativeClass?;
function fromZen(instance as any) as NativeClass?;
```

Entrambi i metodi possono restituire `null` (come mostrato dal `?` alla fine del tipo) perché c'è la possibilità per alcune classi di non esistere o di non avere una controparte backend. Infatti, alcuni array associativi particolari possono essere non rappresentabili nel backend e richiedono un qualche mangling per essere utilizzato correttamente.

Di seguito sono riportati alcuni esempi di utilizzo dei due metodi di fabbrica:

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # restituisce la NativeClass con il nome dato
NativeClass. romZen(<blockstate:minecraft:pumpkin>); # restituisce la NativeClass che corrisponde alla classe
di ZenScript IBlockstate. yName("123"); # restituisce null perché nessuna classe nativa con quel nome può esistere
```

## Proprietà
Una `NativeClass` fornisce accesso in sola lettura a un certo insieme di proprietà, come illustrato nella tabella seguente:

| Nome Proprietà    | Tipo      | Descrizione                                                                                                                                                         |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`      | `stringa` | "Nome più corto" che può essere usato per fare riferimento alla classe (cioè `IItemStack` per `crafttweaker. pi.item.IItemStack`, `Stringa` per `java.lang.String`) |
| `qualificatoNome` | `stringa` | Nome completo che identifica in modo univoco questa classe nell'ambiente backend (es. `crafttweaker.api.item.IItemStack` o `java.lang.String`)                      |

## Metodi
`NativeClass` fornisce anche l'accesso a un singolo metodo che consente la conversione in ZenScript equivalente (fare riferimento a [`Classe`](/Mods/Boson/Reflection/Class/) per ulteriori informazioni). La firma del metodo è la seguente:

```zenscript
function toClass() come Class?;
```

Il metodo può restituire `null` poiché non tutte le classi native possono avere una rappresentazione in ZenScript. Infatti, ci sono alcune parti del backend che non sono esposte a utenti ZenScript, come `org.apache.commons. ang3.BitField`, che non può quindi essere rappresentato tramite un oggetto ZenScript `Class`.
