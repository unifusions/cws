<?php

use App\Http\Controllers\FormleadController;
use App\Http\Controllers\StaticPagesController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

Route::get('/contact', [StaticPagesController::class, 'contact'])->name('contact');
// Route::get('/offerings/uniforms-and-giftings', [StaticPagesController::class, 'uniform'])->name('uniforms');
Route::get('/privacy', [StaticPagesController::class, 'privacy'])->name('privacy');
Route::post('contact', [FormleadController::class, 'store'])->name('formleads.store');

Route::get('/', [StaticPagesController::class, 'home']) 
    ->name('home');

Route::get('/sitemap.xml', [StaticPagesController::class, 'sitemap']);
Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('leads', [FormleadController::class, 'index'])->name('formleads.index');
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

require __DIR__.'/settings.php';
