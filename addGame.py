print("Starting");

gameFile = open("gameDB.js", "r+");

gameInfo = gameFile.read();
fileSize = len(gameInfo);
gameInfo = gameInfo.split('\n');

gameTitleInfo = gameInfo[0];
print(gameTitleInfo);

gameSourceInfo = gameInfo[1];
print(gameSourceInfo);


gameTitle = input("Enter game title: ");
gameTitle = ', "' + gameTitle + '"];';

gameSource = input("Enter game source: ");
gameSource = ", '" + gameSource + "'];";

newGameInfo = gameTitleInfo[0:len(gameTitleInfo)-2] + gameTitle + "\n" + gameSourceInfo[0:len(gameSourceInfo)-2] + gameSource;
gameFile.seek(0);
gameFile.truncate();
gameFile.write(newGameInfo);
print(newGameInfo);

'''







#read old game index and game source index
referenceFile.seek(0,0); # reset seeker first is offset, second is offset from what
IndexFile = referenceFile.read();
gameIndex = IndexFile.split('-')[0];
sourceIndex = IndexFile.split('-')[1];

gameIndex = int(gameIndex);
sourceIndex = int(sourceIndex);

print(gameIndex);
print(sourceIndex);

gameFile = open("gameDB.js", "r+");

gameTitle = input("Enter game title: ");
gameTitle = ', "' + gameTitle + '"';

gameSource = input("Enter game source: ");
gameSource = ", '" + gameSource + "'";

leftPortionGI = gameFile.read(gameIndex);
rightPortionGI = gameFile.read(


gameFile.seek(gameIndex);
gameFile.write(gameTitle);

gameFile.seek(sourceIndex);
gameFile.write(gameSource);


#find and write new game index and new source index
gameIndex = gameIndex + 4; #for the , and the space and "x2
gameIndex = gameIndex + len(gameTitle);

sourceIndex = sourceIndex + 4; #for the , and the space and 'x2
sourceIndex = sourceIndex + len(gameSource);

referenceFile.seek(0);
referenceFile.write(str(gameIndex));
referenceFile.write('-');
referenceFile.write(str(sourceIndex));

gameFile.close();
referenceFile.close();


'''
print("Done");
