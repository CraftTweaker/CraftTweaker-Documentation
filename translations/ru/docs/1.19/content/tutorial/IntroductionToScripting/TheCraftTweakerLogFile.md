# The CraftTweaker Log File

Crafttweaker использует собственный файл лога, чтобы при отладке не просеивать файл latest.log.

### Location

Much like the `latest.log`, the `crafttweaker.log` can be found in the `logs` directory.

You can also use `/ct log` to open the log file in your system's default text editor.


### Format
The `crafttweaker.log` file uses a specific format in it's output, that format is:

```plaintext
[чч:мм:сс.мс][ТИП] <сообщение>
```

An example of how this may look would be:

```plaintext
[14:58:06.697][INFO] Привет, мир!
```


To explain it a bit more:

The Time (`HH:MM:SS.ms`) is included mainly as a way to ensure that logs are fresh, but it also gives some insight on how long each task is taking.

Тип сообщения упрощает навигацию по логу и говорит о серьезности сообщения (Поиск `ERROR` в файле лога может показать все ошибки без продирания через сообщения `INFO` или `DEBUG`).