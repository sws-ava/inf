<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MainController extends Controller
{
    public function getReferals(Request $request)
    {
        $referals = DB::table('referals')->where('refovod', $request->user()->id)->select('referal')->get();
        return $referals;
    }
}
