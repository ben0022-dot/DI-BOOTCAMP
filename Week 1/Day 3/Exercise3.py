keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
result = {keys[i]: values[i] for i in range(len(keys))}
print(result)
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name} has to pay ${price}")
    total_cost += price

print("Total cost:", total_cost)
family = {}
total_cost = 0

while True:
    name = input("Enter name (or 'done' to stop): ")
    if name.lower() == 'done':
        break
    
    age = int(input("Enter age: "))
    family[name] = age

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name} pays ${price}")
    total_cost += price

print("Total cost:", total_cost)
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}

# Change number_stores to 2
brand["number_stores"] = 2

# Print sentence
print(f"Zara targets {', '.join(brand['type_of_clothes'])} customers.")

# Add country_creation
brand["country_creation"] = "Spain"

# Add competitor
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Delete creation_date
brand.pop("creation_date")

# Print last competitor
print(brand["international_competitors"][-1])

# Print US colors
print(brand["major_color"]["US"])

# Number of keys
print(len(brand))

# All keys
print(brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print(brand)
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
dict1 = {user: index for index, user in enumerate(users)}
print(dict1)

dict2 = {index: user for index, user in enumerate(users)}
print(dict2)

sorted_users = sorted(users)

dict3 = {user: index for index, user in enumerate(sorted_users)}
print(dict3)
{'Mickey': 0, 'Minnie': 1, 'Donald': 2, 'Ariel': 3, 'Pluto': 4}

{0: 'Mickey', 1: 'Minnie', 2: 'Donald', 3: 'Ariel', 4: 'Pluto'}

{'Ariel': 0, 'Donald': 1, 'Mickey': 2, 'Minnie': 3, 'Pluto': 4}

