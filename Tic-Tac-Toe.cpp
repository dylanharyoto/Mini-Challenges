#include <iostream>
#include <cmath>
using namespace std;
void display(string grid[]) {
    cout << " " << grid[0] << " | " << grid[1] << " | " << grid[2] << endl;
    cout << "-----------" << endl;
    cout << " " << grid[3] << " | " << grid[4] << " | " << grid[5] << endl;
    cout << "-----------" << endl;
    cout << " " << grid[6] << " | " << grid[7] << " | " << grid[8] << endl;
}

void choose(string name, string grid[]) {
    int index;
    display(grid);
    cout << name << ", please choose a number: ", cin >> index, cout << endl;
    while (grid[index - 1] == "x" || grid[index - 1] == "o") {
        cout << "Invalid, try again: ", cin >> index;
    }
    grid[index - 1] = name;
}

bool check(string grid[]) {
    bool condition1 = (grid[0] == grid[4] && grid[4] == grid[8]);
    bool condition2 = (grid[0] == grid[4] && grid[4] == grid[8]);
    for (int i = 0; i < 3; i++) {
        bool condition3 = (grid[i * 3] == grid[i * 3 + 1] && grid[i * 3 + 1] == grid[i * 3 + 2]);
        bool condition4 = (grid[i] == grid[i + 3] && grid[i + 3] == grid[i + 6]);
        if (condition1 || condition2 || condition3 || condition4) {
            return true;
        }
    }
    return false;
}
void play() {
    string player1 = "x", player2 = "o";
    string grid[] = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
    while (!check(grid)) {
        choose(player1, grid);
        if(check(grid)) {
            cout << "Congratulations, " << player1 << " won the game!" << endl;
            break;
        }
        choose(player2, grid);
        if(check(grid)) {
            cout << "Congratulations, " << player2 << " won the game!" << endl;
            break;
        }
    }
}

int main() {
    vector<int> a = 20;
    int b = 10;
    cout << a&b << endl;
    return 0;
}
