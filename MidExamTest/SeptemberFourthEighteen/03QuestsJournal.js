function quest(arr) {
    let journal = arr.shift().split(', ');
    arr.pop();
    
    for (let i = 0; i < arr.length; i++) {

        let currentcommand = arr[i].split(' - ');
        let command = currentcommand[0];
        let quest = currentcommand[1];
        
        if (command == 'Start') {
            //Start - {quest}" – Receiving this command, you should add the given quest in your journal. 
            //If the quest already exists, you should skip this line.
            if (!journal.includes(quest)) {
                journal.push(quest);
            }
            
        } else if (command == 'Complete') {
            //Complete - {quest}" – You should remove the quest from your journal, if it exists
            if (journal.includes(quest)) {
                let completeIndex = journal.indexOf(quest);
                journal.splice(completeIndex, 1);
            }
        } else if (command == 'Side Quest') {
            //Side Quest - {quest}:{sideQuest}" – You should check if the quest exists, if so, 
            //add the side quest after the quest. Note that you shouldn`t add the sideQuest if it already exists
            let newQuest = quest.slice(0);
            let currentQuest = newQuest.split(':');
            let questChecker = currentQuest[0];
            let side = currentQuest[1];
            if (journal.includes(questChecker)) {
                if (!journal.includes(side)) {
                    
                    let sideQuestIndex = journal.indexOf(questChecker);
                    journal.splice(sideQuestIndex + 1, 0, side);

                }
            }
        } else if (command == 'Renew') {
            //Renew – {quest}" – If the given quest exists, you should change its position and put it last in your journa
            if (journal.includes(quest)) {
                let renewIndex = journal.indexOf(quest);
                journal.splice(renewIndex, 1);
                journal.push(quest);
            }
        }
        
    }

    console.log(journal.join(', '));
}
quest(['Hello World, For loop, If else', 'Start - While loop', 'Complete - For loop', 'Retire!']);
//quest(['Hello World, If else', 'Complete - Homework', 'Side Quest - If else:Switch', 'Side Quest - If else:Switch', 'Renew - Hello World', 'Retire!']);