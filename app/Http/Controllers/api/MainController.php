<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class MainController extends Controller
{
    public function getLang(Request $request)
    {
        $user_lang = $request->user()->lang;
        $keys = DB::table("lang")->select('id', $user_lang)->get();

        for ($i = 0; $i < sizeof($keys); $i++) {
            $maping[$keys[$i]->id] = $keys[$i]->$user_lang;
        }

        return $maping;
    }

    public function getReferals(Request $request)
    {
        $referals = DB::table('referals')->where('refovod', $request->user()->id)->select('referal')->get();
        return $referals;
    }
}
