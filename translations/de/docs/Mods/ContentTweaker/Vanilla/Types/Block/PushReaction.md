# PushReaktion

Eine Push-Reaktion ist, was passiert, wenn ein Kolben versucht, einen Block zu drücken.

# Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.PushReaction;`

## Vergleicht zwei Reaktionen

Sie können sehen, ob zwei Reaktionen gleich sind, indem Sie den `==` Operator benutzen.

```zenscript
if(a == b){}
```

## Statische Methoden

Sie können diese Methoden verwenden, um PushReaction Objekte zu erhalten:

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contenttweaker.PushReaction.ignore();
mods.contenttweaker.PushReaction.pushOnly();
```