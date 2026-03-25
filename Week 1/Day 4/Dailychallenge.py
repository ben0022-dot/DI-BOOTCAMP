# Coffee Shop Menu Manager

# Initial data
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def show_menu(menu_dict):
    """Print all drinks and prices."""
    if not menu_dict:
        print("The menu is empty.")
    else:
        print("Current menu:")
        for drink, price in menu_dict.items():
            print(f"{drink} - {price}₪")


def add_item(menu_dict):
    """Add a new drink to the menu."""
    drink = input("Enter new drink name: ").lower()
    
    if drink in menu_dict:
        print("Item already exists!")
        return
    
    try:
        price = float(input("Enter price: "))
        if price < 0:
            print("Invalid price.")
            return
    except ValueError:
        print("Invalid input. Price must be a number.")
        return

    menu_dict[drink] = price
    print(f'"{drink}" added!')


def update_price(menu_dict):
    """Change the price of an existing drink."""
    drink = input("Which drink do you want to update? ").lower()
    
    if drink not in menu_dict:
        print("Item not found.")
        return
    
    try:
        new_price = float(input("Enter the new price: "))
        if new_price < 0:
            print("Invalid price.")
            return
    except ValueError:
        print("Invalid input. Price must be a number.")
        return

    menu_dict[drink] = new_price
    print("Price updated!")


def delete_item(menu_dict):
    """Remove a drink from the menu."""
    drink = input("Which drink do you want to delete? ").lower()
    
    if drink in menu_dict:
        del menu_dict[drink]
        print("Item deleted.")
    else:
        print("Item not found.")


def show_options():
    """Print the available actions."""
    print("\nWhat would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")


def run_coffee_shop():
    """Main loop of the program."""
    while True:
        show_options()
        choice = input("> ")

        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice, try again.")


def search_item(menu_dict):
    """Search for a drink in the menu."""
    drink = input("Enter drink name to search: ").lower()
    
    if drink in menu_dict:
        print(f"{drink} costs {menu_dict[drink]}₪")
    else:
        print("Not in the menu.")


def apply_discount(menu_dict, percent):
    """Apply a percentage discount to all items."""
    for drink in menu_dict:
        menu_dict[drink] *= (1 - percent / 100)
    print(f"{percent}% discount applied!")


# Start the program
run_coffee_shop()