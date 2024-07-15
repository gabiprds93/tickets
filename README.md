# Algorithm exercise

The new "Avengers" movie has just been released! There are many people at the movie theater box office in a huge line. Each of them has a single $100, $50, or $25 dollars. A ticket for "The Avengers" costs $25.
Vania is currently working as an employee and she wants to sell one ticket to each person in line.
Will Vania be able to sell a ticket to each person and give change/return if she initially has no money and sells the tickets strictly in the order of the order of the queue of people? 

Return YES, if Vania can sell a ticket to each person and give change/turn with the money she has on hand at the time. Otherwise, return NO.

## Example:
- tickets([25, 25, 50]) // => YES.
- tickets[25, 100]) // => NO. Vania will not have enough money to give change/return the $100
- tickets([25, 25, 50, 50, 50, 100]) // => NO. Vania will not have enough money to give $75 change/return (you can't create two $25 tickets from one $50 ticket).
