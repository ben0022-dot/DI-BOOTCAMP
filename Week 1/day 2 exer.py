#Multiples of a Number
number = int(input("Which number do you want to check? "))
print(f"Multiples of {number} from 1 to 100:")
for i in range(1, 101):
    if i % number == 0:
        print(i)
        #input:12
        #length:10
        #Output:
        #Multiples of 12 from 1 to 120:
        #12
        #24     
        #36
        #48
        #60
        #72
        #84
        #96
        #108
        #120
        #input:17
        #length:6
        #Output:
        #Multiples of 17 from 1 to 120:
        #17
        #34
        #51
        #68
        #85
        #102
        #120
        #Remove Consecutive Duplicate Letters
word = input("Enter a word: ")
result = ""
for char in word:
    if not result or char != result[-1]:
        result += char
print("Word without consecutive duplicates:", result)
#input: "ppoeemmm"
#Output: "pome"
#input: "wiiiinnnnddd"
#Output: "wind"
#input: "ttiiitllleeee"
#Output: "tile"
#input: "cccccaaarrrbbonnnnn"
#Output: "carbon"
