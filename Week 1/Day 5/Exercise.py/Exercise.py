# Tic Tac Toe Game (2 Players)

def display_board(board):
    print("\n")
    for row in range(3):
        print(" " + " | ".join(board[row]))
        if row < 2:
            print("---|---|---")
    print("\n")


def player_input(board, player):
    while True:
        try:
            row = int(input(f"Player {player}, enter row (0-2): "))
            col = int(input(f"Player {player}, enter column (0-2): "))

            # Validate range
            if row not in range(3) or col not in range(3):
                print("Invalid position. Try again.")
                continue

            # Check if cell is empty
            if board[row][col] != " ":
                print("Cell already taken. Try again.")
                continue

            return row, col

        except ValueError:
            print("Invalid input. Please enter numbers only.")


def check_win(board, player):
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True

    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    # Check diagonals
    if all(board[i][i] == player for i in range(3)):
        return True

    if all(board[i][2 - i] == player for i in range(3)):
        return True

    return False


def check_tie(board):
    for row in board:
        if " " in row:
            return False
    return True


def play():
    # Step 1: Create empty board
    board = [[" " for _ in range(3)] for _ in range(3)]

    current_player = "X"

    while True:
        # Step 2: Display board
        display_board(board)

        # Step 3: Get input
        row, col = player_input(board, current_player)

        # Update board
        board[row][col] = current_player

        # Step 4: Check win
        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            break

        # Step 5: Check tie
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        # Step 6: Switch player
        current_player = "O" if current_player == "X" else "X"


# Start the game
play()
