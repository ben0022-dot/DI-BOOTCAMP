# Ask user for input
word = input("dodo: ")

# Create empty dictionary
letter_dict = {}

# Loop through each character with index
for index, char in enumerate(word):
    if char in letter_dict:
        letter_dict[char].append(index)
    else:
        letter_dict[char] = [index]

# Print result
print(letter_dict)

items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# Function to clean price strings
def clean_price(price):
    return int(price.replace("$", "").replace(",", ""))

# Convert wallet to integer
money = clean_price(wallet)

basket = []

# Loop through items
for item, price in items_purchase.items():
    item_price = clean_price(price)
    
    if item_price <= money:
        basket.append(item)
        money -= item_price  # update wallet

# Output result
if not basket:
    print("Nothing")
else:
    print(sorted(basket))

