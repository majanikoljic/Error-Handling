function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const numOfMissions = 20 
const daysOfVacay = 13
const dayOfMotiv = 1
const daysOfAttendance = 3

let daysEarned = 0

for (let i =0; numOfMissions > i; i++){
	try{
		mysteryOperation()
        daysEarned += daysOfVacay;
	}catch(error){
        daysEarned += dayOfMotiv;
	}finally{
		daysEarned += daysOfAttendance;
	}

}
console.log(`Total earned: ${daysEarned} days`)