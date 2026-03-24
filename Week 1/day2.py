#Favorite Numbers
favorite_numbers = {
    'Alice': [3, 7, 9],
    'Bob': [5, 10, 15],
    'Charlie': [2, 4, 6]
}
#Print each person's name along with their favorite numbers.
for name, numbers in favorite_numbers.items():
    print(f"{name}'s favorite numbers are: {', '.join(map(str, numbers))}")
#Output:
#Alice's favorite numbers are: 3, 7, 9
#Bob's favorite numbers are: 5, 10, 15
#Charlie's favorite numbers are: 2, 4, 6
# Remove the last number you added to the set.
favorite_numbers['Alice'].pop()
#Output: 9  
#Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
friend_fav_numbers = {
    'Dave': [1, 3, 5],
    'Eve': [2, 4, 6]
}
#Combine your favorite numbers with your friend’s favorite numbers. (Hint: You can use the .update() method for sets, or the + operator for lists)
combined_fav_numbers = {}
for name, numbers in favorite_numbers.items():
    combined_fav_numbers[name] = numbers
for name, numbers in friend_fav_numbers.items():
    combined_fav_numbers[name] = numbers
#Output:
#Alice's favorite numbers are: 3, 7
#Bob's favorite numbers are: 5, 10, 15
#Charlie's favorite numbers are: 2, 4, 6
#Dave's favorite numbers are: 1, 3, 5
#Eve's favorite numbers are: 2, 4, 6
for name, numbers in combined_fav_numbers.items():
    print(f"{name}'s favorite numbers are: {', '.join(map(str, numbers))}")
    #tupples
my_tuple = (1, 2, 3, 4, 5,6,7,8,9,10)
#List Manipulation
my_list = ['banana', 'apple','orange', 'blueberries']
#List methods: append, remove, insert, count, clear
my_list.append('grapes') #Output: ['banana', 'apple', 'orange', 'blueberries', 'grapes']
my_list.remove('orange') #Output: ['banana', 'apple', 'blueberries', 'grapes']
my_list.insert(2, 'kiwi') #Output: ['banana', 'apple', 'kiwi', 'blueberries', 'grapes']
print(my_list.count('kiwi')) #Output: 1
my_list.clear() #Output: []
print(my_list) #Output: []
#Print the final state of the list.
print("Final state of the list:", my_list)
#Floats
my_float = 3.14
#Lists
my_list = [1, 2, 3, 4, 5]
#Floats and integers
my_float = 3.14
my_int = 10
#Range generation
my_range = range(1, 11) #Output: range(1, 11)
print(list(my_range)) #Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ]
#For Loop
for i in range(1, 11):
    print(i)
#Output:
#1
#2
#3
#4
#5
#6
#7  
#8
#9
#10
#11
#12
#13
#14
#15
#16
#17
#18
#19
#20
#While Loop
count = 1
while count <= 10:
    print(count)
    count += 1
#Output:
#1
#2
#3
#4
#5
#6
#7
#8
#9
#10
#11
#12
#13
#14
#15
#16
#17
#18
#19
#20
#Conditionals
number = 5
if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
#Output: The number is positive.
#Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
while True:
    user_name = input("Please enter your name: ")
    if user_name.isalpha() and len(user_name) >= 3:
        print(f"Hi, {user_name}!")
        break
    else:
        print("Invalid name. Please try again.")
        #Output: Hi, [user_name]!
        #hint: check for the method isdigit()
        #if the input is incorrect, keep asking for the correct input until it is correct
        #if the input is correct print “thank you” and break the loop

        #Output: Thank you!
        #Favorite Fruits
favorite_fruits = ['apple', 'banana', 'cherry']
#If the fruit is in their list of favorite fruits, print:
"You chose one of your favorite fruits! Enjoy!"
fruit_choice = input("Please choose a fruit: ")
if fruit_choice in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:    print("You chose a fruit that is not on your favorite list.")
#If not, print:
"You chose a new fruit. I hope you enjoy it!"
#Output: You chose one of your favorite fruits! Enjoy! (if the fruit is in the list)
#Output: You chose a new fruit. I hope you enjoy it! (if the fruit is not in the list)
#Pizza Toppings
#loops
toppings = []
while True:
    topping = input("Please enter a pizza topping (or type 'done' to finish): ")
    if topping.lower() == 'done':
        break
    toppings.append(topping)
print("Your pizza toppings are:", toppings)
#Output: Your pizza toppings are: [list of toppings entered by the user]
#list manipulation
if 'pepperoni' in toppings:
    print("Pepperoni is a great choice!")
else:    print("You might want to consider adding pepperoni for extra flavor!")
#Output: Pepperoni is a great choice! (if pepperoni is in the list)
#Output: You might want to consider adding pepperoni for extra flavor! (if pepperoni is not in the list)
#string formatting
print(f"You have chosen the following toppings: {', '.join(toppings)}")
#Output: You have chosen the following toppings: [list of toppings entered by the user]
#Cinemax Tickets
#Conditionals
age = int(input("Please enter your age: "))
if age < 3:
    print("Your ticket is free!")
elif age < 12:
    print("Your ticket is $10.")
else:    print("Your ticket is $15.")
#Output: Your ticket is free! (if age is less than 3)
#Output: Your ticket is $10. (if age is between 3 and 12)
#Output: Your ticket is $15. (if age is 12 or older)
#Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
#Write code that asks for their ages.
teen_ages = []
for i in range(5):
    age = int(input(f"Please enter the age of teenager {i+1}: "))
    teen_ages.append(age)
#Check if they are old enough to see the movie.
if all(age >= 16 and age <= 21 for age in teen_ages):
    print("All teenagers are old enough to see the movie!")
else:    print("Not all teenagers are old enough to see the movie.")
#Output: All teenagers are old enough to see the movie! (if all ages are between 16 and 21)
#Output: Not all teenagers are old enough to see the movie. (if any age is outside the range of 16 to 21)
#Print the final list of attendees.
print("List of attendees:", teen_ages)
#Output: List of attendees: [list of ages entered by the using]









