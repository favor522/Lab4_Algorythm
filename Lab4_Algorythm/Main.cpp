#include <iostream>
#include <Windows.h>
#include <time.h>
using namespace std;

void gui();

void SortHora(int *Mas, int Rav[], int Big[], int Les[], int counter1, int counter2, int counter3) {
	int Rav[sizeof(Mas) / 3];
	int Big[sizeof(Mas) / 3];
	int Les[sizeof(Mas) / 3];
	for (int i = 0; i < sizeof(Mas); i++) {
		int opora = Mas[0];
		if (Mas[i] = opora) {
			Rav[counter1] += Mas[i];
			counter1++;
		}
		if (Mas[i] > opora) {
			Big[counter2] += Mas[i];
			counter2++
		}
		if (Mas[i] < opora) {
			Les[counter3] += Mas[i];
			counter3++;
		}
	}
	SortHora(Mas, Rav, Big, Les, counter1, counter2, counter3);
	SortHora(Mas, Rav, Big, Les, counter1, counter2, counter3);
}

void Task() {
	int n = 0;
	while (true) {
		cout << "������� ������ �������" << '\n';
		if (cin.fail()) {
			cin.clear();
			cin.ignore(1000, '\n');
			cout << "������� ���� �������� �������, ���������� ��� ���!" << '\n';
		}
		else {
			break;
		}
	}
	int *Mas = new int[n];
	SortHora(Mas, 0, 0, 0, 0, 0, 0);
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