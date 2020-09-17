# Befehle

Sie können diese Klasse benutzen, um einen Befehl zu senden. Sie können diese Klasse nicht verwenden, um neue Befehle zu erstellen! Schau dir [CommandEvent](/Vanilla/Events/Events/CommandEvent/) an, um neue Befehle hinzuzufügen. Sie können auch einen [ICommandManager](/Vanilla/Commands/ICommandManager/) verwenden.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker importieren.Befehle;`

## Aufruf eines Befehls

Dies ist das einzige, was Sie mit dem Commands-Paket tun können.

```zenscript
call(String Command, IPlayer Player, IWorld world)
call(String Command, IPlayer player, IWorld world, boolean logToChat, boolean overridePermissions)
```

Parameter:

- Zeichenkettenbefehl → Der auszuführende Befehl
- [IPlayer](/Vanilla/Players/IPlayer/) Spieler → Der Spieler führt den Befehl aus
- [IWelt](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) → Die Welt, in der der Befehl ausgeführt wird
- boolean logToChat → Soll die Befehlsausgabe im MC-Chat erscheinen?
- boolean overridePermissions sollte der Befehl unabhängig von der erforderlichen Berechtigungsstufe ausgeführt werden?

Die beiden Booleans müssen entweder hinzugefügt oder weggelassen werden. Wenn Sie den Befehl ohne sie aufrufen, werden sie wahr sein.