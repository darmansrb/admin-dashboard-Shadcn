<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyTarget extends Model
{
    protected $fillable = [
        'survey_id',
        'branch_id',
        'service_id',
        'is_published',
    ];
}
