using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HealthCheck : MonoBehaviour
{

    public GameObject EnemyLifePoints;
    public GameObject PlayerLifePoints;
    public GameObject button;

    private void Awake()
    {
        EnemyLifePoints = GameObject.Find("Enemy Life Points");
        PlayerLifePoints = GameObject.Find("Player Life Points");
        
    }
    // Update is called once per frame
    void Update()
    {
        //int player = int.Parse(PlayerLifePoints.GetComponent<Text>());
        
    }
}
