<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StaticPagesController extends Controller
{
    public function home(){
        return view('home');
    }

    public function contact(){
        return view('contact');
    }

      public function privacy(){
        return view('privacy');
    }

    public function uniform(){
        return view('pages.uniforms');
    }
    public function sitemap(){
         return response()->view('sitemap')->header('Content-Type', 'text/xml');
    }
}
