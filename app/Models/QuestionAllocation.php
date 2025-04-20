<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuestionAllocation extends Model
{
    protected $fillable = [
        'question_id',
        'survey_target_id',
    ];
}
