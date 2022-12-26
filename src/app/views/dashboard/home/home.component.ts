import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardData = [
    {
      'image': 'assets/icons/credit-card.png',
      'name': 'Transfer via Card number',
      'ammount': '$1200',
    },
    {
      'image': 'assets/icons/left-and-right-arrows.png',
      'name': 'Transfer Other Banks',
      'ammount': '$150',
    },
    {
      'image': 'assets/icons/bank.png',
      'name': 'Transfer Same Bank',
      'ammount': '$1500',
    },
    {
      'image': 'assets/icons/bank-transfer.png',
      'name': 'Transfer to Other Bank',
      'ammount': '$2000',
    }
  ];

  recentData = [
    {
      'name': 'Water Bill',
      'image': 'assets/icons/waterbill.png',
      'ammount': '$120',
      'status': 'Successfully',
    },
    {
      'name': 'Income Salary',
      'image': 'assets/icons/wallet.png',
      'ammount': '$45',
      'status': 'Received',
    },
    {
      'name': 'Electric Bill',
      'image': 'assets/icons/invoice.png',
      'ammount': '$20',
      'status': 'Successfully',
    },
    {
      'name': 'Internet Bill',
      'image': 'assets/icons/bill.png',
      'ammount': '$10',
      'status': 'Received',
    },

  ];

  upcomingData = [
    {
      'name': 'Home Rent',
      'image': 'assets/icons/house.png',
      'ammount': '$120',
      'status': 'Successfully',
    },
    {
      'name': 'Car Insurance',
      'image': 'assets/icons/insurance.png',
      'ammount': '$45',
      'status': 'Received',
    }

  ];
  historyData = [
    {
      'name': 'John',
      'image': 'assets/avatars/1.png',
      'type': 'Car Insurace',
      'time': '10:42 AM',
      'ammount': '2500$',
      'status': 'completed',
    },
    {
      'name': 'Malkova',

      'image': 'assets/avatars/2.png',
      'type': 'Car Insurace',
      'time': '13:21 PM',
      'ammount': '2500$',
      'status': 'completed',
    },
    {
      'name': 'Marley',

      'image': 'assets/avatars/3.png',
      'type': 'Car Insurace',
      'time': '24:00 AM',
      'ammount': '2500$',
      'status': 'pending',
    },
    {
      'name': 'Ashley',

      'image': 'assets/avatars/2.png',
      'type': 'Car Insurace',
      'time': '03:23 AM',
      'ammount': '2500$',
      'status': 'pending',
    },
    {
      'name': 'Medison',
      'image': 'assets/avatars/1.png',
      'type': 'Car Insurace',
      'time': '10:42 AM',
      'ammount': '2500$',
      'status': 'completed',
    },
    {
      'name': 'Austin',

      'image': 'assets/avatars/2.png',
      'type': 'Car Insurace',
      'time': '13:21 PM',
      'ammount': '2500$',
      'status': 'pending',
    },
    {
      'name': 'Herry',

      'image': 'assets/avatars/3.png',
      'type': 'Car Insurace',
      'time': '24:00 AM',
      'ammount': '2500$',
      'status': 'completed',
    },
    {
      'name': 'Umaiz',

      'image': 'assets/avatars/3.png',
      'type': 'Car Insurace',
      'time': '03:23 AM',
      'ammount': '2500$',
      'status': 'pending',
    },
  ];
}
