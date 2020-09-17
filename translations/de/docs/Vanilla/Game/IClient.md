# IClient

Die Client-Schnittstelle ist für die Bereitstellung allgemeiner Informationen über einen Client.  
Dies ist nur für Kunden verfügbar, diese funktionieren nicht schwer!

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.api.IClient;`

## Wo finde ich die Client-Klasse?

Die Client-Klasse ist ein global registriertes Symbol, so dass Sie nichts importieren müssen, Sie können einfach das Schlüsselwort `Client` verwenden

## Was ist damit zu tun?

`client.player` gibt den Player zurück, der den Client als [IPlayer](/Vanilla/Players/IPlayer/) Objekt ausführt.  
`client.language` gibt die Sprache zurück, in der der Client als String läuft.