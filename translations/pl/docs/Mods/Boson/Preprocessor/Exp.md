# Dyrektywa w sprawie preprocesora flag doświadczalnych

Ta dyrektywa preprocesora umożliwia zachowanie eksperymentalne dla niektórych funkcji ZenScript.

Being part of the ZenScriptX project, and due to the experimental nature of the project in itself, some features may require extensive testing on the compiler side or cause other unintended side effects. Z tych powodów niektóre funkcje zostały uznane za eksperymentalne i domyślnie nie nie są włączone podczas kompilacji skryptu.

Ponadto niektóre flagi eksperymentalne mogą zupełnie nie działać i są dostarczane jedynie jako wskazówki dla przyszłych funkcji. powinien zawsze odnosić się do dokumentacji, aby wiedzieć, czy dana flaga jest używana, czy nie. Z drugiej strony, flagi eksperymentalne nigdy nie zostaną usunięte, co oznacza, że funkcje, które są zintegrowane z "nieeksperymentalną" częścią ZenScriptX nie będą wyłączone ich flagi. Pozwala to na kompatybilność skryptów z nowszymi wersjami projektu ZenScriptX bez konieczności przepisywania .

## Stosowanie dyrektywy
Używanie dyrektywy jest tak proste jak dodawanie `#experimental` na początku pliku, i określający listę flag , które reprezentują zachowanie w celu włączenia zaraz po zgłoszeniu.

Każda flaga musi być oddzielona przez innych spacją, a **musi** zaczynać się od `-E`. To identyfikuje flagę jako eksperymentalną flagę. Po tej deklaracji należy wpisać liter i cyfr identyfikujących konkretną flagę. Zobacz listę w tej dokumentacji, aby poznać wszystkie dostępne flagi.

Jako przykład wyobraź sobie, że chcieliśmy włączyć flagi `soo` i `wd4`. Odpowiednią linią byłyby następujące elementy:
```zenscript
eksperymentalne -Esoo -Ewd4
```

## Lista flag
| Nazwa flagi | Aktualny status | Opis                                                                    |
| ----------- | --------------- | ----------------------------------------------------------------------- |
| `soo`       | Wyłączone       | Umożliwia przeciążenie operatora dla sekwencji                          |
| `saia`      | Wyłączone       | Dostarcza argument `` do funkcji z pojedynczym parametrem w sekwencjach |
| `sao`       | Włączone        | Pozwala na tworzenie `sekwencji` z argumentów tablicy                   |

Znaczenie dla bieżącego statusu jest następujące:

- **Wyłączone** identyfikuje flagę, która istnieje, ale nie ma odpowiednich działań z powodu braku gotowości zaplecza do działania. Jest on dostarczany tylko dzięki „mapie drogowej”, co pozwala programistom wiedzieć, jakie nowe funkcje będą dostępne w najbliższej przyszłości.
- **Włączone** identyfikuje flagę, która istnieje i ma wpływ na plik.
- **Przestarzały** identyfikuje flagę, która nie powinna być już używana z powodu funkcji osiągającej dojrzałość i nie jest już uważana za eksperymentalną. Jest on jednak dostarczany jako forma wstecznej zgodności.
