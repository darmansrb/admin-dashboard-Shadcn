<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@example.com',
                'role' => 'super_admin',
            ],
            [
                'name' => 'Admin Utama',
                'email' => 'admin@example.com',
                'role' => 'admin',
            ],
            [
                'name' => 'Cabang Ruteng',
                'email' => 'cabang.rtg@example.com',
                'role' => 'cabang',
            ],
            [
                'name' => 'Cabang Kefa',
                'email' => 'cabang.kefa@example.com',
                'role' => 'cabang',
            ],
        ];

        foreach ($users as $user) {
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'email_verified_at' => now(),
                'password' => Hash::make('password123'), // password default
                'role' => $user['role'],
            ]);
        }
    }
}
