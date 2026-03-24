# Ask for User Input:
name = input("Hello world!")
print(name)
#Output: Hello world!
#Check the Length of the String:
print(len(name))#Output: 12
#If the string is more than 10 characters, print: "String too long."
if len(name) > 10:
    print("String too long.")#Output: String too long.
    #If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps
elif len(name) == 10:
    print("Perfect string")
    #If the string is less than 10 characters, print: "String too short."
else:    print("String too short.")
#Print the First and Last Characters:
print("First character:", name[0])#Output: First character: H
print("Last character:", name[-1])#Output: Last character: !
#Once the string is validated, print the first and last characters.
#Output: First character: H
#Output: Last character: !
#Build the String Character by Character:
new_string = ""
for char in name:
    new_string += char
    print(new_string)
#Output:
#H
#He
#Hel
#Hell
#Hello
#Hello
#Write code that prints the following output:
#Hello, World!
#Output: Hello, World!
#As a bonus, try shuffling the characters in the string and print the newly jumbled string
import random
shuffled_name = ''.join(random.sample(name, len(name)))
print("Shuffled string:", shuffled_name)
