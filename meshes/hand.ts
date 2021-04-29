import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_hand(gl: WebGLRenderingContext): Mesh {
    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    return {
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        TexCoordBuffer: texcoord_buf,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    -0.001385, 0.0289, 0.08506,
    0.012262, 0.02891, 0.084294,
    0.008816, 0.03592, -0.006425,
    -0.008054, 0.035631, -0.005256,
    -0.008054, 0.035631, -0.005256,
    0.008816, 0.03592, -0.006425,
    0.010208, -0.054815, -0.008776,
    -0.006663, -0.055104, -0.007608,
    -0.006663, -0.055104, -0.007608,
    0.010208, -0.054815, -0.008776,
    0.012769, -0.050857, 0.082463,
    -0.000877, -0.050867, 0.083229,
    -0.000877, -0.050867, 0.083229,
    0.012769, -0.050857, 0.082463,
    0.012262, 0.02891, 0.084294,
    -0.001385, 0.0289, 0.08506,
    -0.008054, 0.035631, -0.005256,
    -0.006663, -0.055104, -0.007608,
    -0.000877, -0.050867, 0.083229,
    -0.001385, 0.0289, 0.08506,
    0.010208, -0.054815, -0.008776,
    0.008816, 0.03592, -0.006425,
    0.012262, 0.02891, 0.084294,
    0.012769, -0.050857, 0.082463,
    -0.010561, 0.034481, -0.00819,
    0.005581, 0.036289, -0.012904,
    -0.007908, 0.039624, -0.057817,
    -0.02405, 0.037816, -0.053103,
    -0.02405, 0.037816, -0.053103,
    -0.007908, 0.039624, -0.057817,
    -0.006305, 0.020333, -0.059731,
    -0.022448, 0.018524, -0.055017,
    -0.022448, 0.018524, -0.055017,
    -0.006305, 0.020333, -0.059731,
    0.007184, 0.016998, -0.014818,
    -0.008958, 0.015189, -0.010104,
    -0.008958, 0.015189, -0.010104,
    0.007184, 0.016998, -0.014818,
    0.005581, 0.036289, -0.012904,
    -0.010561, 0.034481, -0.00819,
    -0.02405, 0.037816, -0.053103,
    -0.022448, 0.018524, -0.055017,
    -0.008958, 0.015189, -0.010104,
    -0.010561, 0.034481, -0.00819,
    -0.006305, 0.020333, -0.059731,
    -0.007908, 0.039624, -0.057817,
    0.005581, 0.036289, -0.012904,
    0.007184, 0.016998, -0.014818,
    -0.008492, 0.008946, -0.009729,
    0.007589, 0.010819, -0.014622,
    -0.008373, 0.012793, -0.066324,
    -0.024454, 0.01092, -0.06143,
    -0.024454, 0.01092, -0.06143,
    -0.008373, 0.012793, -0.066324,
    -0.006521, -0.006527, -0.067633,
    -0.022602, -0.0084, -0.06274,
    -0.022602, -0.0084, -0.06274,
    -0.006521, -0.006527, -0.067633,
    0.009441, -0.008501, -0.015931,
    -0.006641, -0.010374, -0.011038,
    -0.006641, -0.010374, -0.011038,
    0.009441, -0.008501, -0.015931,
    0.007589, 0.010819, -0.014622,
    -0.008492, 0.008946, -0.009729,
    -0.024454, 0.01092, -0.06143,
    -0.022602, -0.0084, -0.06274,
    -0.006641, -0.010374, -0.011038,
    -0.008492, 0.008946, -0.009729,
    -0.006521, -0.006527, -0.067633,
    -0.008373, 0.012793, -0.066324,
    0.007589, 0.010819, -0.014622,
    0.009441, -0.008501, -0.015931,
    -0.007242, -0.014884, -0.010548,
    0.009032, -0.014337, -0.015124,
    -0.002639, -0.013896, -0.05658,
    -0.018912, -0.014444, -0.052005,
    -0.018912, -0.014444, -0.052005,
    -0.002639, -0.013896, -0.05658,
    -0.002139, -0.03151, -0.056908,
    -0.018412, -0.032057, -0.052333,
    -0.018412, -0.032057, -0.052333,
    -0.002139, -0.03151, -0.056908,
    0.009532, -0.031951, -0.015452,
    -0.006741, -0.032498, -0.010876,
    -0.006741, -0.032498, -0.010876,
    0.009532, -0.031951, -0.015452,
    0.009032, -0.014337, -0.015124,
    -0.007242, -0.014884, -0.010548,
    -0.018912, -0.014444, -0.052005,
    -0.018412, -0.032057, -0.052333,
    -0.006741, -0.032498, -0.010876,
    -0.007242, -0.014884, -0.010548,
    -0.002139, -0.03151, -0.056908,
    -0.002639, -0.013896, -0.05658,
    0.009032, -0.014337, -0.015124,
    0.009532, -0.031951, -0.015452,
    -0.025175, 0.037965, -0.05345,
    -0.01111, 0.03996, -0.06263,
    -0.033807, 0.04235, -0.096885,
    -0.047871, 0.040354, -0.087705,
    -0.047871, 0.040354, -0.087705,
    -0.033807, 0.04235, -0.096885,
    -0.03251, 0.023066, -0.09909,
    -0.046574, 0.021071, -0.08991,
    -0.046574, 0.021071, -0.08991,
    -0.03251, 0.023066, -0.09909,
    -0.009813, 0.020677, -0.064835,
    -0.023878, 0.018681, -0.055655,
    -0.023878, 0.018681, -0.055655,
    -0.009813, 0.020677, -0.064835,
    -0.01111, 0.03996, -0.06263,
    -0.025175, 0.037965, -0.05345,
    -0.047871, 0.040354, -0.087705,
    -0.046574, 0.021071, -0.08991,
    -0.023878, 0.018681, -0.055655,
    -0.025175, 0.037965, -0.05345,
    -0.03251, 0.023066, -0.09909,
    -0.033807, 0.04235, -0.096885,
    -0.01111, 0.03996, -0.06263,
    -0.009813, 0.020677, -0.064835,
    -0.025824, 0.011507, -0.061474,
    -0.011587, 0.013391, -0.070407,
    -0.034379, 0.014488, -0.106501,
    -0.048617, 0.012604, -0.097568,
    -0.048617, 0.012604, -0.097568,
    -0.034379, 0.014488, -0.106501,
    -0.032811, -0.004837, -0.108078,
    -0.047049, -0.006721, -0.099145,
    -0.047049, -0.006721, -0.099145,
    -0.032811, -0.004837, -0.108078,
    -0.010019, -0.005934, -0.071984,
    -0.024257, -0.007818, -0.063051,
    -0.024257, -0.007818, -0.063051,
    -0.010019, -0.005934, -0.071984,
    -0.011587, 0.013391, -0.070407,
    -0.025824, 0.011507, -0.061474,
    -0.048617, 0.012604, -0.097568,
    -0.047049, -0.006721, -0.099145,
    -0.024257, -0.007818, -0.063051,
    -0.025824, 0.011507, -0.061474,
    -0.032811, -0.004837, -0.108078,
    -0.034379, 0.014488, -0.106501,
    -0.011587, 0.013391, -0.070407,
    -0.010019, -0.005934, -0.071984,
    -0.019676, -0.014397, -0.052382,
    -0.005143, -0.013823, -0.061015,
    -0.025188, -0.013764, -0.094755,
    -0.039721, -0.014337, -0.086122,
    -0.039721, -0.014337, -0.086122,
    -0.025188, -0.013764, -0.094755,
    -0.024684, -0.031529, -0.095086,
    -0.039217, -0.032102, -0.086453,
    -0.039217, -0.032102, -0.086453,
    -0.024684, -0.031529, -0.095086,
    -0.004639, -0.031588, -0.061346,
    -0.019171, -0.032161, -0.052713,
    -0.019171, -0.032161, -0.052713,
    -0.004639, -0.031588, -0.061346,
    -0.005143, -0.013823, -0.061015,
    -0.019676, -0.014397, -0.052382,
    -0.039721, -0.014337, -0.086122,
    -0.039217, -0.032102, -0.086453,
    -0.019171, -0.032161, -0.052713,
    -0.019676, -0.014397, -0.052382,
    -0.024684, -0.031529, -0.095086,
    -0.025188, -0.013764, -0.094755,
    -0.005143, -0.013823, -0.061015,
    -0.004639, -0.031588, -0.061346,
    -0.009989, 0.051511, 0.065661,
    -0.000561, 0.065343, 0.064337,
    -0.015486, 0.071823, 0.02576,
    -0.024915, 0.057991, 0.027085,
    -0.024915, 0.057991, 0.027085,
    -0.015486, 0.071823, 0.02576,
    0.000815, 0.059916, 0.017453,
    -0.008614, 0.046083, 0.018777,
    -0.008614, 0.046083, 0.018777,
    0.000815, 0.059916, 0.017453,
    0.015741, 0.053436, 0.056029,
    0.006312, 0.039604, 0.057354,
    0.006312, 0.039604, 0.057354,
    0.015741, 0.053436, 0.056029,
    -0.000561, 0.065343, 0.064337,
    -0.009989, 0.051511, 0.065661,
    -0.024915, 0.057991, 0.027085,
    -0.008614, 0.046083, 0.018777,
    0.006312, 0.039604, 0.057354,
    -0.009989, 0.051511, 0.065661,
    0.000815, 0.059916, 0.017453,
    -0.015486, 0.071823, 0.02576,
    -0.000561, 0.065343, 0.064337,
    0.015741, 0.053436, 0.056029,
    -0.006725, -0.038551, -0.010014,
    0.009467, -0.038227, -0.01489,
    -0.001353, -0.039097, -0.050876,
    -0.017545, -0.039421, -0.046,
    -0.017545, -0.039421, -0.046,
    -0.001353, -0.039097, -0.050876,
    -0.000955, -0.054994, -0.050612,
    -0.017147, -0.055318, -0.045736,
    -0.017147, -0.055318, -0.045736,
    -0.000955, -0.054994, -0.050612,
    0.009864, -0.054125, -0.014626,
    -0.006328, -0.054449, -0.009749,
    -0.006328, -0.054449, -0.009749,
    0.009864, -0.054125, -0.014626,
    0.009467, -0.038227, -0.01489,
    -0.006725, -0.038551, -0.010014,
    -0.017545, -0.039421, -0.046,
    -0.017147, -0.055318, -0.045736,
    -0.006328, -0.054449, -0.009749,
    -0.006725, -0.038551, -0.010014,
    -0.000955, -0.054994, -0.050612,
    -0.001353, -0.039097, -0.050876,
    0.009467, -0.038227, -0.01489,
    0.009864, -0.054125, -0.014626,
    -0.017719, -0.039433, -0.047417,
    -0.002918, -0.039345, -0.055601,
    -0.018668, -0.039437, -0.084087,
    -0.033469, -0.039526, -0.075902,
    -0.033469, -0.039526, -0.075902,
    -0.018668, -0.039437, -0.084087,
    -0.018572, -0.055552, -0.084087,
    -0.033373, -0.05564, -0.075903,
    -0.033373, -0.05564, -0.075903,
    -0.018572, -0.055552, -0.084087,
    -0.002821, -0.055459, -0.055602,
    -0.017623, -0.055548, -0.047418,
    -0.017623, -0.055548, -0.047418,
    -0.002821, -0.055459, -0.055602,
    -0.002918, -0.039345, -0.055601,
    -0.017719, -0.039433, -0.047417,
    -0.033469, -0.039526, -0.075902,
    -0.033373, -0.05564, -0.075903,
    -0.017623, -0.055548, -0.047418,
    -0.017719, -0.039433, -0.047417,
    -0.018572, -0.055552, -0.084087,
    -0.018668, -0.039437, -0.084087,
    -0.002918, -0.039345, -0.055601,
    -0.002821, -0.055459, -0.055602,
    -0.025987, 0.058941, 0.023445,
    -0.01855, 0.073332, 0.019022,
    -0.036803, 0.072894, -0.013094,
    -0.04424, 0.058503, -0.008671,
    -0.04424, 0.058503, -0.008671,
    -0.036803, 0.072894, -0.013094,
    -0.020471, 0.061648, -0.022223,
    -0.027908, 0.047257, -0.017799,
    -0.027908, 0.047257, -0.017799,
    -0.020471, 0.061648, -0.022223,
    -0.002218, 0.062086, 0.009893,
    -0.009655, 0.047695, 0.014317,
    -0.009655, 0.047695, 0.014317,
    -0.002218, 0.062086, 0.009893,
    -0.01855, 0.073332, 0.019022,
    -0.025987, 0.058941, 0.023445,
    -0.04424, 0.058503, -0.008671,
    -0.027908, 0.047257, -0.017799,
    -0.009655, 0.047695, 0.014317,
    -0.025987, 0.058941, 0.023445,
    -0.020471, 0.061648, -0.022223,
    -0.036803, 0.072894, -0.013094,
    -0.01855, 0.073332, 0.019022,
    -0.002218, 0.062086, 0.009893
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    -0.005, 0.9971, 0.076,
    -0.005, 0.9971, 0.076,
    -0.005, 0.9971, 0.076,
    -0.005, 0.9971, 0.076,
    -0.0695, 0.0248, -0.9973,
    -0.0695, 0.0248, -0.9973,
    -0.0695, 0.0248, -0.9973,
    -0.0695, 0.0248, -0.9973,
    0.0126, -0.9989, 0.0444,
    0.0126, -0.9989, 0.0444,
    0.0126, -0.9989, 0.0444,
    0.0126, -0.9989, 0.0444,
    0.056, -0.0226, 0.9982,
    0.056, -0.0226, 0.9982,
    0.056, -0.0226, 0.9982,
    0.056, -0.0226, 0.9982,
    -0.9976, -0.0128, 0.0684,
    -0.9976, -0.0128, 0.0684,
    -0.9976, -0.0128, 0.0684,
    -0.9976, -0.0128, 0.0684,
    0.9994, 0.0119, -0.0328,
    0.9994, 0.0119, -0.0328,
    0.9994, 0.0119, -0.0328,
    0.9994, 0.0119, -0.0328,
    -0.0824, 0.9917, 0.0984,
    -0.0824, 0.9917, 0.0984,
    -0.0824, 0.9917, 0.0984,
    -0.0824, 0.9917, 0.0984,
    -0.2869, 0.0709, -0.9553,
    -0.2869, 0.0709, -0.9553,
    -0.2869, 0.0709, -0.9553,
    -0.2869, 0.0709, -0.9553,
    0.0824, -0.9917, -0.0984,
    0.0824, -0.9917, -0.0984,
    0.0824, -0.9917, -0.0984,
    0.0824, -0.9917, -0.0984,
    0.2869, -0.0709, 0.9553,
    0.2869, -0.0709, 0.9553,
    0.2869, -0.0709, 0.9553,
    0.2869, -0.0709, 0.9553,
    -0.9544, -0.1069, 0.2787,
    -0.9544, -0.1069, 0.2787,
    -0.9544, -0.1069, 0.2787,
    -0.9544, -0.1069, 0.2787,
    0.9544, 0.1069, -0.2787,
    0.9544, 0.1069, -0.2787,
    0.9544, 0.1069, -0.2787,
    0.9544, 0.1069, -0.2787,
    -0.0952, 0.9932, 0.0673,
    -0.0952, 0.9932, 0.0673,
    -0.0952, 0.9932, 0.0673,
    -0.0952, 0.9932, 0.0673,
    -0.2948, 0.0365, -0.9549,
    -0.2948, 0.0365, -0.9549,
    -0.2948, 0.0365, -0.9549,
    -0.2948, 0.0365, -0.9549,
    0.0952, -0.9932, -0.0673,
    0.0952, -0.9932, -0.0673,
    0.0952, -0.9932, -0.0673,
    0.0952, -0.9932, -0.0673,
    0.2948, -0.0365, 0.9549,
    0.2948, -0.0365, 0.9549,
    0.2948, -0.0365, 0.9549,
    0.2948, -0.0365, 0.9549,
    -0.9508, -0.1107, 0.2893,
    -0.9508, -0.1107, 0.2893,
    -0.9508, -0.1107, 0.2893,
    -0.9508, -0.1107, 0.2893,
    0.9508, 0.1107, -0.2893,
    0.9508, 0.1107, -0.2893,
    0.9508, 0.1107, -0.2893,
    0.9508, 0.1107, -0.2893,
    -0.0284, 0.9994, 0.0186,
    -0.0284, 0.9994, 0.0186,
    -0.0284, 0.9994, 0.0186,
    -0.0284, 0.9994, 0.0186,
    -0.271, 0.0102, -0.9625,
    -0.271, 0.0102, -0.9625,
    -0.271, 0.0102, -0.9625,
    -0.271, 0.0102, -0.9625,
    0.0284, -0.9994, -0.0186,
    0.0284, -0.9994, -0.0186,
    0.0284, -0.9994, -0.0186,
    0.0284, -0.9994, -0.0186,
    0.271, -0.0102, 0.9625,
    0.271, -0.0102, 0.9625,
    0.271, -0.0102, 0.9625,
    0.271, -0.0102, 0.9625,
    -0.9622, -0.0324, 0.2705,
    -0.9622, -0.0324, 0.2705,
    -0.9622, -0.0324, 0.2705,
    -0.9622, -0.0324, 0.2705,
    0.9622, 0.0324, -0.2705,
    0.9622, 0.0324, -0.2705,
    0.9622, 0.0324, -0.2705,
    0.9622, 0.0324, -0.2705,
    -0.0667, 0.9913, 0.1133,
    -0.0667, 0.9913, 0.1133,
    -0.0667, 0.9913, 0.1133,
    -0.0667, 0.9913, 0.1133,
    -0.5514, 0.0581, -0.8322,
    -0.5514, 0.0581, -0.8322,
    -0.5514, 0.0581, -0.8322,
    -0.5514, 0.0581, -0.8322,
    0.0667, -0.9913, -0.1133,
    0.0667, -0.9913, -0.1133,
    0.0667, -0.9913, -0.1133,
    0.0667, -0.9913, -0.1133,
    0.5514, -0.0581, 0.8322,
    0.5514, -0.0581, 0.8322,
    0.5514, -0.0581, 0.8322,
    0.5514, -0.0581, 0.8322,
    -0.8316, -0.118, 0.5427,
    -0.8316, -0.118, 0.5427,
    -0.8316, -0.118, 0.5427,
    -0.8316, -0.118, 0.5427,
    0.8316, 0.118, -0.5427,
    0.8316, 0.118, -0.5427,
    0.8316, 0.118, -0.5427,
    0.8316, 0.118, -0.5427,
    -0.0806, 0.9934, 0.0811,
    -0.0806, 0.9934, 0.0811,
    -0.0806, 0.9934, 0.0811,
    -0.0806, 0.9934, 0.0811,
    -0.5338, 0.0257, -0.8453,
    -0.5338, 0.0257, -0.8453,
    -0.5338, 0.0257, -0.8453,
    -0.5338, 0.0257, -0.8453,
    0.0806, -0.9934, -0.0811,
    0.0806, -0.9934, -0.0811,
    0.0806, -0.9934, -0.0811,
    0.0806, -0.9934, -0.0811,
    0.5338, -0.0257, 0.8453,
    0.5338, -0.0257, 0.8453,
    0.5338, -0.0257, 0.8453,
    0.5338, -0.0257, 0.8453,
    -0.8418, -0.1114, 0.5282,
    -0.8418, -0.1114, 0.5282,
    -0.8418, -0.1114, 0.5282,
    -0.8418, -0.1114, 0.5282,
    0.8418, 0.1114, -0.5282,
    0.8418, 0.1114, -0.5282,
    0.8418, 0.1114, -0.5282,
    0.8418, 0.1114, -0.5282,
    -0.0284, 0.9994, 0.0186,
    -0.0284, 0.9994, 0.0186,
    -0.0284, 0.9994, 0.0186,
    -0.0284, 0.9994, 0.0186,
    -0.5108, 0.0015, -0.8597,
    -0.5108, 0.0015, -0.8597,
    -0.5108, 0.0015, -0.8597,
    -0.5108, 0.0015, -0.8597,
    0.0284, -0.9994, -0.0186,
    0.0284, -0.9994, -0.0186,
    0.0284, -0.9994, -0.0186,
    0.0284, -0.9994, -0.0186,
    0.5108, -0.0015, 0.8597,
    0.5108, -0.0015, 0.8597,
    0.5108, -0.0015, 0.8597,
    0.5108, -0.0015, 0.8597,
    -0.8592, -0.0339, 0.5104,
    -0.8592, -0.0339, 0.5104,
    -0.8592, -0.0339, 0.5104,
    -0.8592, -0.0339, 0.5104,
    0.8592, 0.0339, -0.5104,
    0.8592, 0.0339, -0.5104,
    0.8592, 0.0339, -0.5104,
    0.8592, 0.0339, -0.5104,
    -0.7468, 0.5455, 0.3806,
    -0.7468, 0.5455, 0.3806,
    -0.7468, 0.5455, 0.3806,
    -0.7468, 0.5455, 0.3806,
    -0.3565, 0.1548, -0.9214,
    -0.3565, 0.1548, -0.9214,
    -0.3565, 0.1548, -0.9214,
    -0.3565, 0.1548, -0.9214,
    0.7468, -0.5455, -0.3806,
    0.7468, -0.5455, -0.3806,
    0.7468, -0.5455, -0.3806,
    0.7468, -0.5455, -0.3806,
    0.3565, -0.1548, 0.9214,
    0.3565, -0.1548, 0.9214,
    0.3565, -0.1548, 0.9214,
    0.3565, -0.1548, 0.9214,
    -0.5615, -0.8237, 0.0789,
    -0.5615, -0.8237, 0.0789,
    -0.5615, -0.8237, 0.0789,
    -0.5615, -0.8237, 0.0789,
    0.5615, 0.8237, -0.0789,
    0.5615, 0.8237, -0.0789,
    0.5615, 0.8237, -0.0789,
    0.5615, 0.8237, -0.0789,
    -0.025, 0.9995, -0.0166,
    -0.025, 0.9995, -0.0166,
    -0.025, 0.9995, -0.0166,
    -0.025, 0.9995, -0.0166,
    -0.2879, -0.0231, -0.9574,
    -0.2879, -0.0231, -0.9574,
    -0.2879, -0.0231, -0.9574,
    -0.2879, -0.0231, -0.9574,
    0.025, -0.9995, 0.0166,
    0.025, -0.9995, 0.0166,
    0.025, -0.9995, 0.0166,
    0.025, -0.9995, 0.0166,
    0.2879, 0.0231, 0.9574,
    0.2879, 0.0231, 0.9574,
    0.2879, 0.0231, 0.9574,
    0.2879, 0.0231, 0.9574,
    -0.9573, -0.0191, 0.2883,
    -0.9573, -0.0191, 0.2883,
    -0.9573, -0.0191, 0.2883,
    -0.9573, -0.0191, 0.2883,
    0.9573, 0.0191, -0.2883,
    0.9573, 0.0191, -0.2883,
    0.9573, 0.0191, -0.2883,
    0.9573, 0.0191, -0.2883,
    -0.006, 1, 0.0001,
    -0.006, 1, 0.0001,
    -0.006, 1, 0.0001,
    -0.006, 1, 0.0001,
    -0.4839, -0.0028, -0.8751,
    -0.4839, -0.0028, -0.8751,
    -0.4839, -0.0028, -0.8751,
    -0.4839, -0.0028, -0.8751,
    0.006, -1, -0.0001,
    0.006, -1, -0.0001,
    0.006, -1, -0.0001,
    0.006, -1, -0.0001,
    0.4839, 0.0028, 0.8751,
    0.4839, 0.0028, 0.8751,
    0.4839, 0.0028, 0.8751,
    0.4839, 0.0028, 0.8751,
    -0.8751, -0.0052, 0.4839,
    -0.8751, -0.0052, 0.4839,
    -0.8751, -0.0052, 0.4839,
    -0.8751, -0.0052, 0.4839,
    0.8751, 0.0052, -0.4839,
    0.8751, 0.0052, -0.4839,
    0.8751, 0.0052, -0.4839,
    0.8751, 0.0052, -0.4839,
    -0.7482, 0.5152, 0.4182,
    -0.7482, 0.5152, 0.4182,
    -0.7482, 0.5152, 0.4182,
    -0.7482, 0.5152, 0.4182,
    -0.4941, -0.0119, -0.8693,
    -0.4941, -0.0119, -0.8693,
    -0.4941, -0.0119, -0.8693,
    -0.4941, -0.0119, -0.8693,
    0.7482, -0.5152, -0.4182,
    0.7482, -0.5152, -0.4182,
    0.7482, -0.5152, -0.4182,
    0.7482, -0.5152, -0.4182,
    0.4941, 0.0119, 0.8693,
    0.4941, 0.0119, 0.8693,
    0.4941, 0.0119, 0.8693,
    0.4941, 0.0119, 0.8693,
    -0.4429, -0.857, 0.2634,
    -0.4429, -0.857, 0.2634,
    -0.4429, -0.857, 0.2634,
    -0.4429, -0.857, 0.2634,
    0.4429, 0.857, -0.2634,
    0.4429, 0.857, -0.2634,
    0.4429, 0.857, -0.2634,
    0.4429, 0.857, -0.2634
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75,
    0.375, 0,
    0.625, 0,
    0.625, 0.25,
    0.375, 0.25,
    0.375, 0.25,
    0.625, 0.25,
    0.625, 0.5,
    0.375, 0.5,
    0.375, 0.5,
    0.625, 0.5,
    0.625, 0.75,
    0.375, 0.75,
    0.375, 0.75,
    0.625, 0.75,
    0.625, 1,
    0.375, 1,
    0.125, 0.5,
    0.375, 0.5,
    0.375, 0.75,
    0.125, 0.75,
    0.625, 0.5,
    0.875, 0.5,
    0.875, 0.75,
    0.625, 0.75
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    263, 262, 260,
    262, 261, 260,
    259, 258, 256,
    258, 257, 256,
    255, 254, 252,
    254, 253, 252,
    251, 250, 248,
    250, 249, 248,
    247, 246, 244,
    246, 245, 244,
    243, 242, 240,
    242, 241, 240,
    239, 238, 236,
    238, 237, 236,
    235, 234, 232,
    234, 233, 232,
    231, 230, 228,
    230, 229, 228,
    227, 226, 224,
    226, 225, 224,
    223, 222, 220,
    222, 221, 220,
    219, 218, 216,
    218, 217, 216,
    215, 214, 212,
    214, 213, 212,
    211, 210, 208,
    210, 209, 208,
    207, 206, 204,
    206, 205, 204,
    203, 202, 200,
    202, 201, 200,
    199, 198, 196,
    198, 197, 196,
    195, 194, 192,
    194, 193, 192,
    191, 190, 188,
    190, 189, 188,
    187, 186, 184,
    186, 185, 184,
    183, 182, 180,
    182, 181, 180,
    179, 178, 176,
    178, 177, 176,
    175, 174, 172,
    174, 173, 172,
    171, 170, 168,
    170, 169, 168,
    167, 166, 164,
    166, 165, 164,
    163, 162, 160,
    162, 161, 160,
    159, 158, 156,
    158, 157, 156,
    155, 154, 152,
    154, 153, 152,
    151, 150, 148,
    150, 149, 148,
    147, 146, 144,
    146, 145, 144,
    143, 142, 140,
    142, 141, 140,
    139, 138, 136,
    138, 137, 136,
    135, 134, 132,
    134, 133, 132,
    131, 130, 128,
    130, 129, 128,
    127, 126, 124,
    126, 125, 124,
    123, 122, 120,
    122, 121, 120,
    119, 118, 116,
    118, 117, 116,
    115, 114, 112,
    114, 113, 112,
    111, 110, 108,
    110, 109, 108,
    107, 106, 104,
    106, 105, 104,
    103, 102, 100,
    102, 101, 100,
    99, 98, 96,
    98, 97, 96,
    95, 94, 92,
    94, 93, 92,
    91, 90, 88,
    90, 89, 88,
    87, 86, 84,
    86, 85, 84,
    83, 82, 80,
    82, 81, 80,
    79, 78, 76,
    78, 77, 76,
    75, 74, 72,
    74, 73, 72,
    71, 70, 68,
    70, 69, 68,
    67, 66, 64,
    66, 65, 64,
    63, 62, 60,
    62, 61, 60,
    59, 58, 56,
    58, 57, 56,
    55, 54, 52,
    54, 53, 52,
    51, 50, 48,
    50, 49, 48,
    47, 46, 44,
    46, 45, 44,
    43, 42, 40,
    42, 41, 40,
    39, 38, 36,
    38, 37, 36,
    35, 34, 32,
    34, 33, 32,
    31, 30, 28,
    30, 29, 28,
    27, 26, 24,
    26, 25, 24,
    23, 22, 20,
    22, 21, 20,
    19, 18, 16,
    18, 17, 16,
    15, 14, 12,
    14, 13, 12,
    11, 10, 8,
    10, 9, 8,
    7, 6, 4,
    6, 5, 4,
    3, 2, 0,
    2, 1, 0
]);