#include <iostream>
#include <Windows.h>
#include <time.h>
using namespace std;

void gui();

void SortHora(int Mas[], int firstel, int lastel) {
	int i = firstel;
	int j = lastel;
	while (i = j - 1) {
		for(i < )
	}
}

void Task() {

	/*while (true) {
		cout << "������� ������ �������" << '\n';
		if (cin.fail()) {
			cin.clear();
			cin.ignore(1000, '\n');
			cout << "������� ���� �������� �������, ���������� ��� ���!" << '\n';
		}
		else {
			break;
		}
	}*/
	int Mas[15];
	SortHora(Mas, 0, 14);
}

void gui() {
	cout << "������������� ���������..." << '\n';
	cout << "��������� �������� �������" << '\n';
	string choose;
	cout << "������� ��������: " << '\n';
	cout << "1. ������� �� ������ ���������� ����������" << '\n';
	cout << "0. �����" << '\n';
	cin >> choose;
	if (choose == "1") {
		Task();
	}
	else if (choose == "0") {
		exit;
	}
	else {
		cout << "������� ���� �������� �� �����, ���������� ��� ���" << '\n';
		gui();
	}
}


int main() {
	srand(time(0));
	SetConsoleCP(1251);
	SetConsoleOutputCP(1251);
	gui();
	return 0;
}