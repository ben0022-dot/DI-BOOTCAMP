#Print the following output using one line of code:
print("Hello, World!")
#Output: Hello, World!
#Write code that calculates the result of:
#(99 to the power of 3, times 8)
print((99**3)*8)#Output: 970299000
#Write code that calculates the result of:
#(99 to the power of 3, times 8, )
print((99**3)*8)#Output: 970299000
#Predict the output of the following code snippets:
#Comment what is your guess, then run the code and compare
#15<8
#Output: False
print(5<3)#Output: False
#3==3
print(3==3)#Output: True
#3=="3"
print(3=="3")#Output: False
#"Hello"=="Hello"
print("Hello"=="Hello")#Output: True
#Create a variable called computer_brand which value is the brand name of your computer.
computer_brand = "Dell"
#Using the computer_brand variable, print a sentence that states the following:
#"I have a <computer_brand> computer."
print(f"I have a {computer_brand} computer.")#Output: I have a Dell computer.
#Create a variable called name, and set it’s value to your name.
name = "Alice"
print(f"Hello, my name is {name}.")#Output: Hello, my name is Alice.
#Create a variable called age, and set it’s value to your age.
age = 30
print(f"I am {age} years old.")#Output: I am 30 years old
#Create a variable called shoe_size, and set it’s value to your shoe size.
shoe_size = 9
print(f"My shoe size is {shoe_size}.")#Output: My shoe size is 9.
#Create a variable called info, and set it’s value to a sentence that contains your name, age and shoe size.
info = f"My name is {name}, I am {age} years old and my shoe size is {shoe_size}."
print(info)#Output: My name is Alice, I am 30 years old and my shoe
shoe_size is 9.
#Create two variables, a and b.
a = 10
b = 5
#Set the value of a to be 3 more than b.
a = b + 3
#If a is bigger than b, have your code print "Hello World".
if a > b:
    print("Hello World")#Output: Hello World
    #Write code that asks the user for a number and determines whether this number is odd or even.
number = int(input("Enter a number: "))
if number % 2 == 0:
    print("The number is even.")
else:    print("The number is odd.")    
#Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.



user_name = input("What is your name? ")
if user_name == name:
    print("Wow, we have the same name! That's pretty cool!")
else:    print("Nice to meet you, " + user_name + "! Your name is different from mine.")    
#Write code that will ask the user for their height in centimeters.
height_cm = float(input("Please enter your height in centimeters: "))
#If they are over 145 cm, print a message that states they are tall enough to ride.
if height_cm > 145:
    print("You are tall enough to ride!")
else:    print("Sorry, you are not tall enough to ride.")
#If they are not tall enough, print a message that says they need to grow some more to be able to ride.
if height_cm <= 145:
    print("You need to grow some more to be able to ride.")
    