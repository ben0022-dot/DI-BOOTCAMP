# Step 1: Get Input
user_input = input("Enter words separated by commas: ")

# Step 2: Split the String
words = user_input.split(",")

# Step 3: Sort the List
words.sort()

# Step 4: Join the Sorted List
sorted_words = ",".join(words)

# Step 5: Print the Result
print(sorted_words)

def longest_word(sentence):
    # Step 2: Split the Sentence into Words
    words = sentence.split()
    
    # Step 3: Initialize Variables
    longest = words[0]
    
    # Step 4 & 5: Iterate and Compare
    for word in words:
        if len(word) > len(longest):
            longest = word
    
    # Step 6: Return the Longest Word
    return longest
print(longest_word("Margaret's toy is a pretty doll."))
# Output: Margaret's

print(longest_word("A thing of beauty is a joy forever."))
# Output: forever.

print(longest_word("Forgetfulness is by all means powerless!"))
# Output: Forgetfulness
