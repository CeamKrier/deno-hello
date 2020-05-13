@echo off

if [%1] == [] ( @echo on && echo Please specify your command. && @echo off  )
if [%1] == [run] ( @deno.exe "run" "--allow-net" "--allow-read" "index.ts" ) else ^
if [%1] == [clean-run] ( @deno.exe "run" "--allow-net" "--allow-read" "--reload" "index.ts" ) ^
else ( @echo on && echo Supplied arguments did not match with available ones. )
