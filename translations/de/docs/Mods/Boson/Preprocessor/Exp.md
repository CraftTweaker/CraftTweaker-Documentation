# Experimentelle Flags Präprozessorrichtlinie

Diese Präprozessor-Direktive ermöglicht einige experimentelle Verhaltensweisen für bestimmte ZenScript-Funktionalitäten.

Being part of the ZenScriptX project, and due to the experimental nature of the project in itself, some features may require extensive testing on the compiler side or cause other unintended side effects. Aus diesen Gründen gelten einige Funktionen als experimentell und werden beim Kompilieren eines Skripts standardmäßig nicht aktiviert.

Darüber hinaus funktionieren einige experimentelle Flaggen möglicherweise nicht und werden nur als Hinweise auf kommende Features zur Verfügung gestellt. Sie sollten immer auf die Dokumentation verweisen, um zu wissen, ob eine bestimmte Flagge verwendet wird oder nicht. Auf der anderen Seite werden experimentelle Flaggen niemals entfernt, bedeutet, dass Funktionen, die in den "nicht-experimentellen" Teil von ZenScriptX integriert sind, ihre Flaggen nicht deaktiviert haben. Dadurch können Skripte mit neueren Versionen des ZenScriptX-Projekts kompatibel sein, ohne dass ein Rewrite benötigt.

## Verwendung der Richtlinie
Die Direktive zu verwenden ist so einfach, wie `#experimental` am Anfang der Datei hinzuzufügen und eine Liste von Flags angeben, die ein Verhalten darstellen, das direkt nach der Deklaration aktiviert werden soll.

Every flag must be separated by the others with spaces and it **has to** begin with `-E`. Dies identifiziert die Flagge als eine experimentelle Flagge. Following that declaration, a series of letters and numbers that identify the specific flag should be entered. Lesen Sie die Liste in dieser Dokumentation, um alle verfügbaren Flags zu kennen.

Als Beispiel stellen wir uns vor, wir wollten die `soo` und `wd4` Flags aktivieren. Die entsprechende Zeile wäre:
```zenscript
#experimentell-Esoo -Ewd4
```

## Liste der Flaggen
| Name der Markierung | Aktueller Status | Beschreibung                                                                                           |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| `soo`               | Deaktiviert      | Aktiviert das Überladen des Operators für Sequenzen                                                    |
| `saia`              | Deaktiviert      | Stellt ein automatisches `es` Argument für Funktionen mit einem einzigen Parameter in Sequenzen bereit |
| `sao`               | Aktiviert        | Ermöglicht das Erstellen von `Sequenzen` aus Array-Argumenten                                          |

Die Bedeutung für den aktuellen Status ist folgende:

- **Deaktiviert** identifiziert eine Flagge, die existiert, aber keine entsprechenden Aktionen hat, da das Backend nicht bereit ist. Es ist nur aufgrund von "Roadmap" zur Verfügung gestellt, so dass Entwickler wissen können, welche neuen Funktionen in naher Zukunft verfügbar sein werden.
- **Aktiviert** identifiziert eine Flagge, die existiert und hat einen Effekt auf die Datei.
- **Veraltete** identifiziert eine Flagge, die nicht mehr verwendet werden sollte, da eine Funktion ausgereift ist und nicht mehr als experimentell angesehen wird. Es wird jedoch als eine Form der Abwärtskompatibilität angeboten.
