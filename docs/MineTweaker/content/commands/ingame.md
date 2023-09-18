# Ingame
Although most of the command information is redudant to the ingame information here a simple help for beginners what commands are available ingame and what they do.

How to use ingame commands for minetweaker:

Open the ingame minecraft chat (default value is t). All commands you put ingame start with a slash and are followed by the command. So also for minetweaker. To post a minetweaker command simple write minetweaker after the slash for those of you that are a bit lazy to type such a long word

```
/minetweaker
```
simply use

```
/mt
```
Several commands print the information into the chat while others write it into the minetweaker.log file which is in your minecraft folder.

## List of Commands
Show all ingame commands and what they do in the ingame chat:

```
/mt help
```
Open Minetweaker's bugtracker on github in a new tab of your browser:

```
/mt bugs
```
Open Minetweaker's forum thread on the minecraftforum.net page in a new tab of your browser:

```
/mt forum
```
Open Minetweaker's wiki page in a new tab of your browser:

```
/mt wiki
```
Post the currently held item of your minecraft char into the chat. It will also give the the amount and if the item has any the tag

```
/mt hand
```
Post all item names and their amounts and their tags of your inventory into the ingame chat:

```
/mt inventory
```
Posts all liquid names into the minetweaker.log file in your minecraft directory:

```
/mt liquids
```
Posts the names and the version of all mods into the ingame chat:

```
/mt mods
```
Posts the name in chat of the item for its given id:

```
/mt name <id>
```
Post all names of all items (including all items from all installed mods) into minetweaker.log:

```
/mt names
```
Post all current ore dictionary entries from the game into minetweaker.log:

```
/mt oredict
```
Post all items from a given name to an ore dictionary entry into the minetweaker.log:

```
/mt oredict <name>
```
Parses and if possible reloads all zenscripts (minetweaker scripts .zs files) that are currently saved in your minecraft script folder. If an error occurs the name of the file and a basic error message is posted in the chat. Additionally a more detailed error message is written into the minetweaker.log file. If no errors occur it posts only a Scripts reloaded message into the ingame chat and writes all removed, added and updated recipes or ore dictionary entries into the minetweaker.log file:

```
/mt reload
```
## Minetweaker.log file
The file is cleared once you start a new minecraft game.