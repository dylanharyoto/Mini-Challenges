#include <iostream>
#include <string>
std::string bleep(std::string word, std::string &text) {
    for (int x = 0; x < text.length(); x++) {
        if (word[0] == text[x]) {
            for (int y = 0; y < word.length(); y++) {
                if (text[x + y] == word[y]) {
                    text[x + y] = '*';
                }
            }
        }
    }
    return text;
}
int main() {
    std::string word = "broccoli";
    std::string text = "I love broccoli. It is green. #broccoli";
    std::cout << bleep(word, text) << std::endl;
}
