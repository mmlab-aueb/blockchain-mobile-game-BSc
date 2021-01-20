package com.example.mmlabapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText e2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e2 = (EditText)findViewById(R.id.editText);
    }

    public void next(View v){

        OpenActivity2();

    }

    public void OpenActivity2(){
         Intent intent = new Intent(this,MainActivity2.class);
         intent.putExtra("Name",e2.getText().toString());
         startActivity(intent);
    }


}