# ICliente

La interfaz del cliente es para proporcionar información general sobre un cliente.  
Esto solo está disponible para los clientes, no funcionarán muy bien.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.api.IClient;`

## ¿Dónde encontrar la clase cliente?

La clase Client es un Symbol globalmente registrado, así que no necesitará importar nada, sólo puede utilizar la palabra clave `cliente`

## ¿Qué hacer con ella?

`client.player` devuelve el jugador ejecutando el cliente como un [objeto IPlayer](/Vanilla/Players/IPlayer/) .  
`client.language` devuelve el idioma en el que se ejecuta el cliente como cadena.