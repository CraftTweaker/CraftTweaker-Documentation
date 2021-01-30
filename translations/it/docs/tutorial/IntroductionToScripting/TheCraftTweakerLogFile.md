# The CraftTweaker Log File

CraftTweaker uses it's own log file, this is mainly done to make debugging easier.

### Location

Much like the `latest.log`, the `crafttweaker.log` can be found in the `logs` directory.

You can also use `/ct log` to open the log file in your system's default text editor.


### Format
The `crafttweaker.log` file uses a specific format in it's output, that format is:

```plaintext
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

An example of how this may look would be:

```plaintext
[14:58:06.697][DONE][SERVER][INFO] Ciao mondo!
```

The format is used for debugging purposes and the only time the format is not used is when printing command dumps, where it just prints the message so it is easier to copy and paste it.


To explain it a bit more:

The Time (`HH:MM:SS.ms`) is included mainly as a way to ensure that logs are fresh, but it also gives some insight on how long each task is taking.

The LoaderStage tells us *when* the script is loaded in the game life cycle (while the game is still starting up, or when joining a world for example).

The Side (`SERVER` or `CLIENT`) tells us which logical thread the script is running on.

the Type tells us the type of message, it makes navigating logs a breeze and tells you the severity of the message (Simply searching `ERROR` ins a log file can show you were all the errors are without having to sift through all the `INFO` or `DEBUG` outputs).