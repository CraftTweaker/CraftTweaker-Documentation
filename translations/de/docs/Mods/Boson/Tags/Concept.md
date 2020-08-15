# Tags

Tags sind ein leistungsstarkes Konzept, das in Vanilla Minecraft seit 1.13 vorhanden ist. Es erlaubt Spielern und Datapack-Herstellern eine Reihe von Elementen zu definieren, die in einem bestimmten Kontext als gleich angesehen werden können Entfernen Sie einige der Hardcodierung von Blöcken und Artikeln im Code.

Tags werden als Satz von JSON-Dateien dargestellt, die im `Daten/<namespace>/tags/<tag-type>` Verzeichnis gespeichert werden wobei `Namensraum` den Namensraum identifiziert, zu dem die Tags gehören und `<tag-type>` die Art der Elemente, die der Tag gruppiert.

Dieses Konzept mag im Konzept dem Ore Dictionary ähnlich erscheinen, und in der Tat ist es fast das gleiche. Anders als das Erzwörterbuch können sich Tags aber auch gegenseitig referenzieren, wobei einige als Gruppen für andere agieren. Außerdem funktioniert das Erzwörterbuch nur mit Gegenständen (z. Dinge, die in deinem Inventar platziert werden können), Tags funktionieren bei Bedarf auch mit Blöcken, Flüssigkeiten und anderen Typen.

Boson's Implementierung unterscheidet sich von Vanilla's aufgrund der großen Unterschiede in den internen Änderungen in 1. 3, aber es funktioniert fast dasselbe, mit Ausnahme der einfacheren Mod-Erweiterung mit neuen Tag-Typen. Aus diesem Grund ist die CraftTweaker Integration auch anders.

Um loszulegen, lesen Sie, wie man [einen Tag über einen Klammer-Handler erhältt](/Mods/Boson/Tags/BracketHandler/).
